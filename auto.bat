@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo [0/4] 타 계정 충돌 방지 및 시스템 세척...
:: 이 부분이 핵심입니다: 시작하자마자 혹시 모를 남의 계정 정보를 지웁니다.
for /f "tokens=1,2 delims= " %%a in ('cmdkey /list ^| findstr /i "github.com"') do (
    cmdkey /delete:%%b >nul 2>&1
)
:: 로컬 설정 초기화
git config --local credential.helper ""

echo [1/4] 사용자 계정 설정 및 하이패스 가동...
git config user.name "KHJ-0201"
git config user.email "ddsp0201@naver.com"
:: store 대신 manager를 권장합니다 (윈도우 표준 보안 사용)
git config credential.helper manager

echo [2/4] 저장소 연결 및 최신화 (Pull)...
if not exist .git (
    git init
)
git remote remove origin 2>nul
git remote add origin https://github.com/KHJ-0201/J.CAR.CCBBTT
git pull origin master --rebase

echo [3/4] 변경 내용 기록 및 전송 (Push)...
git add .
set CUR_DATE=%date%
set CUR_TIME=%time%
git commit -m "Auto Commit: %CUR_DATE% %CUR_TIME%"
git push origin master

if errorlevel 1 (
    echo.
    echo [!] 전송 실패! 권한 문제입니다. 
    echo [팁] 위에서 뜬 로그인 창에 선생님의 계정(KHJ-0201)으로 로그인했는지 확인하세요.
    pause
    exit /b
)

echo.
echo [4/4] 작업 완료!
echo ==========================================
echo ● 그냥 종료: 창을 닫거나 엔터를 누르세요.
echo ● 완벽 로그아웃: off 를 입력하세요. (권장)
echo ==========================================
set /p exit_choice="입력: "

if /i "%exit_choice%"=="off" (
    echo.
    echo [보안] 윈도우 시스템에서 깃허브 열쇠를 강제로 회수 중...
    git config --global --unset credential.helper
    for /f "tokens=1,2 delims= " %%a in ('cmdkey /list ^| findstr /i "github.com"') do (
        cmdkey /delete:%%b
    )
    echo [완료] 로그인 정보가 파기되었습니다.
    pause
)