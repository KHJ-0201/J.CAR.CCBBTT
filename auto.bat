@echo off
REM 파일이 있는 위치로 이동 (작업장 진입)
cd /d "%~dp0"

echo [1/5] 사용자 계정 설정 중...
:: 어느 컴퓨터에서든 선생님 이름으로 기록되게 합니다.
git config user.name "KHJ-0201"
git config user.email "ddsp0201@naver.com"
:: 로그인 정보를 이 컴퓨터에 안전하게 저장 (하이패스 설정)
git config credential.helper store

echo [2/5] 저장소 연결 확인 및 초기화...
:: 이미 설정된 경우 에러를 무시하고 진행합니다.
if not exist .git (
    git init
)

:: 리모트 연결이 이미 되어있으면 삭제 후 다시 연결 (충돌 방지)
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