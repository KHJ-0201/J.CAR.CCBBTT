@echo off
:: 한글 깨짐 방지 설정
chcp 65001 >nul

REM 파일이 있는 위치로 이동
cd /d "%~dp0"

echo [1/4] 사용자 계정 설정 및 하이패스 가동...
:: 실행할 때마다 선생님 성함으로 명찰을 바꿔 답니다.
git config user.name "KHJ-0201"
git config user.email "ddsp0201@naver.com"
:: 작업하는 동안 로그인을 유지하도록 설정 (윈도우 자격 증명 관리자 사용)
git config credential.helper manager

echo [2/4] 저장소 연결 및 최신화 (Pull)...
if not exist .git (
    git init
)
git remote remove origin 2>nul
git remote add origin https://github.com/KHJ-0201/J.CAR.CCBBTT.git
:: 충돌 방지를 위해 리베이스 방식으로 가져오기
git pull origin master --rebase

echo [3/4] 변경 내용 기록 및 전송 (Push)...
git add .
set CUR_DATE=%date%
set CUR_TIME=%time%
git commit -m "Auto Commit: %CUR_DATE% %CUR_TIME%"
git push origin master

if errorlevel 1 (
    echo.
    echo [!] 전송 실패! 네트워크 상태나 권한을 확인하세요.
    echo [팁] 다른 계정이 로그인되어 있다면 제어판의 '자격 증명 관리자'에서 삭제 후 다시 시도하세요.
    pause
    exit /b
)

echo.
echo [4/4] 작업 완료! 현재 로그인 상태가 유지 중입니다.
echo ==========================================
echo ● 그냥 종료: 창을 닫거나 엔터를 누르세요. (로그인 유지)
echo ● 완벽 로그아웃: off 를 입력하고 엔터를 누르세요.
echo ==========================================
set /p exit_choice="입력 (종료는 Enter / 로그아웃은 off): "

:: 사용자가 off를 입력했을 때만 자동 보안 파기 실행
if /i "%exit_choice%"=="off" (
    echo.
    echo [보안] 윈도우 시스템에서 깃허브 열쇠를 강제로 회수 중...
    
    :: 1. Git 설정상의 자격 증명 도우미 해제
    git config --global --unset credential.helper
    git config --system --unset credential.helper 2>nul
    
    :: 2. 윈도우 자격 증명 관리자(cmdkey)에서 github.com 기록 직접 삭제
    for /f "tokens=1,2 delims= " %%a in ('cmdkey /list ^| findstr /i "github.com"') do (
        echo 삭제 대상 발견: %%b
        cmdkey /delete:%%b
    )
    
    echo.
    echo [완료] 이 컴퓨터에서 선생님의 로그인 정보가 완전히 파기되었습니다.
    pause
)