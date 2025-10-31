@echo off

REM 아래는 pwd해서 프로젝트 경로 적어야 해
cd /d "C:\Users\user\Desktop\code"

git pull origin main

if errorlevel 1 (
    echo pull 실패
    pause
    exit /b
)

git add .
set DATE=%date%
set TIME=%time%

REM 혹시 모르니까 시간으로 커밋 메시지
git commit -m "commit %DATE% %TIME%"

git push origin main

if errorlevel 1 (
    echo push 실패
    pause
    exit /b
)
