@echo off
title ZOOEMBRIO - local site
cd /d "%~dp0"

echo.
echo  ========================================
echo   ZOOEMBRIO - local preview
echo  ========================================
echo.
echo   Browser:  http://localhost:4321/
echo.
echo   Keep this window OPEN while you view the site.
echo   Press Ctrl+C to stop the server.
echo.
echo  ========================================
echo.

if not exist "node_modules\" (
    echo Installing dependencies, first run only...
    call npm install
    echo.
)

call npm run dev

echo.
echo Server stopped.
pause
