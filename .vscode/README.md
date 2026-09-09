# 문제 JS — repairData 자동 접기

## 다른 PC에서 처음 열 때

프로젝트 **루트**( `start` 폴더와 같은 위치 )에서 **`문제폴더자동접기.bat`** 실행

1. 설치 완료 창 확인
2. Cursor에서 **Ctrl+Shift+P** → `Developer: Reload Window`
3. `*문제.js` 파일 다시 열기

`// #region … repairData` 영역이 자동으로 접힙니다.

## 수동 접기

`// #region … repairData` 줄 왼쪽 ▼ 또는 `Ctrl+Shift+[`

## 참고

- `// #region` 은 **주석**이라 CBT 앱 실행·빌드에는 영향 없습니다.
- `repairData: []` 빈 회차는 마커를 넣지 않았습니다.
