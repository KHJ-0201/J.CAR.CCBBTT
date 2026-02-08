@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo [1/4] 계정 설정 중...
git config user.name "KHJ-0201"
git config user.email "ddsp0201@naver.com"
git config credential.helper store

echo [2/4] 연결 및 동기화...
if not exist .git ( git init )
git remote remove origin 2>nul
git remote add origin https://github.com/KHJ-0201/J.CAR.CCBBTT
git pull origin master --rebase

echo [3/4] 업로드 중...
git add .
set CUR_TIME=%time%
git commit -m "Auto Commit: %CUR_TIME%"
git push origin master

echo [4/4] 작업 완료!
echo ==========================================
echo ● 그냥 종료: 창을 닫거나 아무 키나 누르세요.
echo ● 로그아웃: 영문 'off'를 입력하고 엔터를 누르세요.
echo ==========================================
set /p exit_choice="입력: "

:: 사용자가 off를 입력했을 때만 로그아웃 실행
if /i "%exit_choice%"=="off" (
    echo.
    echo 로그아웃 및 보안 파기 중...
    git config --global --unset credential.helper
    git config --system --unset credential.helper 2>nul
    echo [완료] 이 컴퓨터에서 선생님의 정보가 안전하게 삭제되었습니다.
    pause
)