# 원티드 프리온보딩 코스 (wanted_pre_onboarding)

사전 과제

## 프로젝트 소개

- 주요 UI Component 구현

## 배포링크

[🚀 배포 링크](https://wanted-pre-onboarding-kappa.vercel.app)

## 실행 방법

```
① 해당 레포지토리를 클론한다.
② 프로젝트의 패키지를 설치한다. (npm install)
③ scripts 명령어로 프로젝트를 실행한다. (npm start)
```

## Toggle
![토글](https://user-images.githubusercontent.com/87353284/165449486-c8988cdd-500e-49cd-b092-fec74873181c.gif)

### 실행 방법
토글 스위치를 클릭하면 기본/상세로 변경됩니다.

### 구현 방법
토글 스위치 On/Off를 true/false 상태로 관리하고 토글 스위치에 onClick 이벤트로 토글 상태를 변경했습니다.
토글 스위치의 배경 색상이 바뀌는 애니메이션은 CSS의 가상 요소 ::before와 transform 속성을 사용해 구현했습니다.


## Tab
![탭](https://user-images.githubusercontent.com/87353284/165449804-0e4eb42e-05d5-414a-9d19-281d70fc1a23.gif)

### 실행 방법
원하는 탭을 클릭하면 해당 탭으로 underbar가 이동하며 그 탭은 하이라이트 됩니다.

### 구현 방법
tab 속성 값을 가지고 있는 객체들을 요소로 가진 배열을 정의하고 현재 인덱스 값을 나타내는 상태 변수를 선언합니다. 각 탭을 클릭하면 해당 탭의 인덱스로 바꿔주는 함수를 onClick 이벤트에 설정해 선택된 탭의 인덱스를 변경되면 그에 맞는 tab 속성 값이 렌더링 됩니다. 각 탭의 className에 선택된 요소에 'selected' 클래스를 추가하는 조건문을 사용해 선택된 탭 UI를 구현했습니다.

## Slider
![프로그레스](https://user-images.githubusercontent.com/87353284/165449978-385473af-295f-49d9-be62-e0632f9eecd9.gif)

### 실행 방법
pointer를 움직이면 상단의 값이 자동으로 변하며 프로그레스바각 각 포인트 만큼 이동합니다.
하단의 버튼을 누르면 해당 버튼의 퍼선티지만큼 상단 값과 프로그레스바가 변경됩니다.

### 구현 방법
pointer 이동에 의한 상태 변경은 마우스 이벤트(onMouseMove, onMouseUp, dragStart)를 활용하여 시작점과 끝점의 width를 계산하여
프로그레스바와 상단값을 변하게 해주었습니다.

## Input
![valid](https://user-images.githubusercontent.com/87353284/165450036-ecbbb0cb-b546-454e-ac8c-2b792e257da1.gif)

### 실행 방법
E-mail과 password를 입력하여 E-mail은 형식의 유효성을 검사하게 됩니다. password는 eye icon을 누르면 숨겨진 텍스트 확인할 수 있습니다.

### 구현 방법
입력된 값을 상태로 관리하였습니다. E-mail은 정규 표현식으로 검사했으며 password를 eye icon을 누르면 input 태그의 속성을 text로 변경해주었습니다.

## Dropdown
![search](https://user-images.githubusercontent.com/87353284/165450088-d910c2b8-b43e-44c4-b753-92ae804f85eb.gif)

### 실행 방법
input 창에 값을 입력하면 해당 입력 값을 포함하고 있는 목록을 보여줍니다. 해당 항목을 클릭하면 input 값을 선택한 값으로 변경합니다.

### 구현 방법
자동완성 항목을 렌더링 하기 위해 상태로 관리합니다. input 창의 값의 유무를 상태 값으로 설정해 값이 있을 시 자동완성 항목을 렌더링 합니다. 자동완성 항목의 값을 선택했을 때 선택된 값을 input 값으로 변경하기 위해 input 값도 상태로 관리하고 onClick 이벤트에 input 값, 자동완성 항목 값을 변경하는 함수를 설정해 구현했습니다.
