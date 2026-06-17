@echo off
chcp 65001 >nul
echo ============================================
echo  ZOOEMBRIO — деплой на Cloudflare Pages
echo ============================================
echo.

cd /d "%~dp0"

where gh >nul 2>&1
if errorlevel 1 (
  echo [ОШИБКА] GitHub CLI не найден. Установите: winget install GitHub.cli
  pause
  exit /b 1
)

gh auth status >nul 2>&1
if errorlevel 1 (
  echo Сначала войдите в GitHub:
  echo   gh auth login -h github.com -p https -w
  echo.
  gh auth login -h github.com -p https -w
)

echo.
echo Создаём репозиторий на GitHub и загружаем код...
gh repo create zooembrio-website --public --source=. --remote=origin --push

if errorlevel 1 (
  echo.
  echo Если репозиторий уже существует, выполните вручную:
  echo   git remote add origin https://github.com/ВАШ_ЛОГИН/zooembrio-website.git
  echo   git push -u origin master
  pause
  exit /b 1
)

echo.
echo ============================================
echo  Код загружен на GitHub!
echo ============================================
echo.
echo Теперь подключите Cloudflare Pages:
echo   1. Откройте https://dash.cloudflare.com
echo   2. Workers ^& Pages -^> Create -^> Pages -^> Connect to Git
echo   3. Выберите репозиторий zooembrio-website
echo   4. Настройки сборки:
echo        Build command:    npm run build
echo        Build output:     dist
echo        Production branch: main
echo        Node version:     20
echo   5. Save and Deploy
echo.
echo После деплоя сайт будет доступен по адресу:
echo   https://zooembrio-website.pages.dev
echo.
start https://dash.cloudflare.com/?to=/:account/pages/new
pause
