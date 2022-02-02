## 🏃Project

- 팀명 : JS-TFT
- 기간 : 1/5 ~ 1/30 (주 2회)
- 프로젝트명 : Calendar-Project

## 📃Introduce

- 캘린더를 통해 일정을 관리하는 기능을 제공합니다. 일정을 추가, 삭제, 수정을 할 수 있습니다.

- 지역별 날씨를 알려주는 기능을 제공합니다. 최저, 최고, 평균 기온으로 필터 기능을 구현했습니다.

- 지역별 미세먼지를 알려주는 기능을 제공합니다. 미세먼지 농도 정도에 따라 필터을 구현해 쉽게 미세먼지 농도를 구분할 수 있습니다.

## 🌟Main Feature

- React-router-dom : Router 구분
- Material-UI : UI 디자인
- Recoil : Atom 상태 관리, selector 필터 기능

## 🔧Stack

### Frontend

- Language : JavaScript
- Library & Framework : React, Material-UI, Recoil, FullCalendar
- Deploy : Netlify

### Backend

- Language : JavaScript(nodeJS)
- Library & Framework :
- Deploy :

<img src="https://user-images.githubusercontent.com/46489446/149169674-9838e704-1cfc-46b7-ac4a-495dd5597187.png" width="350" title="Cover Image" align="right">

## Git Flow

[참고]

- https://techblog.woowahan.com/2553/

## Git branch

- <code>main</code> : 제품으로 출시될 수 있는 브랜치
- <code>develop</code> : 다음 출시 버전을 개발하는 브랜치
- <code>feature</code> : 기능을 개발하는 브랜치\
  -> <code>feature/sign</code>와 같이 <code>브랜치/기능</code> 형태로 브랜치를 생성한다.

## Commit Convention

- <code>feat</code> : 새로운 기능 개발
- <code>fix</code> : 버그 수정
- <code>refactor</code> : 기능 변경이 없는 코드 수정
- <code>test</code> : 테스트 코드 작성 및 수정
- <code>docs</code> : 문서 작성 및 수정
- <code>build</code> : 빌드 파일 작성 및 수정
- <code>style</code> : 스타일 변경(reformat, indent)
- <code>chore</code> : 단순한 작업

## PR Rules

- feature -> develop : merge commit
- develop -> main : merge commit
