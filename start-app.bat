@echo off
echo ========================================
echo    MERN Todo App - Startup Script
echo ========================================
echo.

echo [1/3] Checking MongoDB...
echo.

REM Try to start MongoDB service
net start MongoDB 2>nul
if %errorlevel% neq 0 (
    echo MongoDB service not found or already running
    echo Make sure MongoDB is running manually if needed
) else (
    echo MongoDB service started successfully
)
echo.

echo [2/3] Starting Backend Server...
echo Opening backend in new window...
start "Todo App - Backend" cmd /k "cd /d %~dp0server && npm start"
echo.

timeout /t 3 /nobreak > nul

echo [3/3] Starting Frontend...
echo Opening frontend in new window...
start "Todo App - Frontend" cmd /k "cd /d %~dp0client && npm run dev"
echo.

echo ========================================
echo.
echo ✅ App is starting!
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will open on: http://localhost:5173
echo.
echo Both servers will open in separate windows.
echo Close those windows to stop the servers.
echo.
echo Press any key to exit this window...
pause > nul
