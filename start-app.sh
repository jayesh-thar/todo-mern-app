#!/bin/bash

echo "========================================"
echo "   MERN Todo App - Startup Script"
echo "========================================"
echo ""

echo "[1/3] Checking MongoDB..."
echo ""

# Try to start MongoDB
if command -v brew &> /dev/null; then
    brew services start mongodb-community 2>/dev/null || echo "MongoDB may already be running"
elif command -v systemctl &> /dev/null; then
    sudo systemctl start mongod 2>/dev/null || echo "MongoDB may already be running"
else
    echo "Please start MongoDB manually if not running"
fi
echo ""

echo "[2/3] Starting Backend Server..."
cd "$(dirname "$0")/server"
npm start &
BACKEND_PID=$!
echo "Backend started with PID: $BACKEND_PID"
echo ""

sleep 3

echo "[3/3] Starting Frontend..."
cd "$(dirname "$0")/client"
npm run dev &
FRONTEND_PID=$!
echo "Frontend started with PID: $FRONTEND_PID"
echo ""

echo "========================================"
echo ""
echo "✅ App is running!"
echo ""
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for Ctrl+C
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
