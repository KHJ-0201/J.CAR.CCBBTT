@echo off
:: 한글 깨짐 방지 설정
chcp 65001 >nul

REM 파일이 있는 위치로 이동
cd /d "%~dp0"

echo [1/5] 사용자 계정 설정 중...
git config user.name "KHJ-0201"
git config user.email "ddsp0201@naver.com"
git config credential.helper store

echo [2/5] 저장소 연결 확인 및 초기화...
if not exist .git (
    git init
)

git remote remove origin 2>nul
git remote add origin https://github.com/KHJ-0201/J.CAR.CCBBTT

echo [3/5] 최신 데이터 동기화 중 (Pull)...
git pull origin master --rebase

echo [4/5] 변경된 문제 파일 기록 중...
git add .
set CUR_DATE=%date%
set CUR_TIME=%time%
git commit -m "Auto Commit: %CUR_DATE% %CUR_TIME%"

echo [5/5] 깃허브로 전송 중 (Push)...
git push origin master

if errorlevel 1 (
    echo.
    echo [!] 전송 실패! 네트워크 연결이나 권한을 확인하세요.
    pause
    exit /b
)

echo.
echo ==========================================
echo 업로드 성공! 오늘도 고생하셨습니다, 선생님.
echo ==========================================
pause