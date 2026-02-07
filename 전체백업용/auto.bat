@echo off

REM "~\Desktop\codev1"
cd /d "%~dp0" 
git init

git remote add origin https://github.com/KHJ-0201/J.CAR.CCBBTT

git pull origin master

if errorlevel 1 (
    echo pull 실패
    pause
    exit /b
)

git add .
set DATE=%date%
set TIME=%time%
git commit -m "commit %DATE% %TIME%"

git push origin master 

if errorlevel 1 (
    echo push 실패
    pause
    exit /b
)

pause