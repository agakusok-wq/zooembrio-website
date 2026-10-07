@echo off
REM Остановить dev-сервер на порту 4321 (ZOOEMBRIO)
title ZOOEMBRIO — stop port 4321
cd /d "%~dp0"

echo.
echo  Останавливаю процесс, слушающий порт 4321...
echo.

set "FOUND=0"
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":4321" ^| findstr /I "LISTENING ПРОСЛУ"') do (
  set "FOUND=1"
  taskkill /PID %%a /F >nul 2>&1
  if errorlevel 1 (
    echo  Не удалось завершить PID %%a — возможно, нужны права администратора.
  ) else (
    echo  Завершён PID %%a
  )
)

if "%FOUND%"=="0" echo  На порту 4321 никто не слушает — сервер уже остановлен.

if exist ".dev-server.pid" del /f /q ".dev-server.pid" >nul 2>&1

echo.
echo  Готово.
timeout /t 3 >nul
