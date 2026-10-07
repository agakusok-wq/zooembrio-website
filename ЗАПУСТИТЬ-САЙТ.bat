@echo off
REM ZOOEMBRIO — локальный просмотр (порт 4321). Окно консоли нужно не закрывать.
title ZOOEMBRIO — http://127.0.0.1:4321/
cd /d "%~dp0"

echo.
echo  ZOOEMBRIO  http://127.0.0.1:4321/
echo  Чтобы остановить — закройте это окно или запустите ОСТАНОВИТЬ-САЙТ.bat
echo.

if not exist "node_modules\astro\" (
  echo Installing dependencies...
  call npm install --no-fund --no-audit
  if errorlevel 1 (
    echo npm install failed.
    pause
    exit /b 1
  )
)

start "" cmd /c "timeout /t 4 /nobreak >nul & start http://127.0.0.1:4321/"
call npm run dev
