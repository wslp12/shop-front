# 기술 스택

프레임워크: `react`  
api 상태관리: `react-query`  
프론트 상태관리: `recoil`  
불변성 관리: `immer`  
nodeVersion: `18.12.1`  
uiL-ibray: `mui`, `tailwind`  
api-Libray: `axios`  
date-Libray: `dayjs`  
editor-Library: `jodit`  
toastify-Library: `react-toastify`

- 패키지 매니저: `pnpm`
- 번들러: `vite`

---

## 프로젝트 실행 방법

> `npm i g pnpm` : pnpm 설치 되어 있지 않다면 해당 명령어 실행

> `pnpm i` : 패키지에 등록되어 있는 모듈을 설치한다

> `pnpm run dev`: 개발환경으로 로컬 프로젝트를 실행(default 포트:5173)

### NOTI

1. 요청 양식 상세 조회 API (`GET /api/templates/:template_id`) 등 특정 API는 유저에 의해 추가되거나 변경되는 값이 아니라 판단되어 중복 호출 방지 를 위하여 staleTime 이 설정되어 있습니다

2. 요청 양식 상세 조회 API 가 `TemplateSummary[]` 타입을 리턴한다고 설정되어 있지만 `Template` 을 리턴 하여 배열타입이 아니라고 판단하였습니다.

3. 포트가 8080이 아니라 3000 이어 그에 맞게 api 포트를 수정하였습니다.

4. 특정 상태값 `pageInfoAtomState` 등은 새로고침 이후, 컴포넌트 unmount 이후에도 상태값을 유지하는게 ux적 경험이 좋아 `localStorage` 에 저장 했습니다.

5. 하드코딩으로 중복된 문자열은 다국어와 함께 처리될 것으로 판단하여 따로 진행하지 않았습니다.

6. 에러타입 k`ey`가 `message`로 되어 있어 해당 타입 기준으로 타입가드를 진행 했습니다.

7. `NewRequest`타입(요청서 작성) 에 `assignees` 키는 유저이름(`string`)의 배열만 받지만 중복방지 및 스텝별 담당자를 명확하게 처리하기 위하여 각 스텝별 키를 받기위한 {kye,uusername} 타입을 정의하여 작업했습니다.
   -> 서버로 데이터를 전송할때는 보낼때는 key값을 제외한 유저이름만 보냅니다.

8. 요청서 제출 이후 서버로부터 요청 디테일에 대한 결과값을 리스폰스받기에 작성이후 요청 디테일 페이지로 이동합니다.

9. `401` 에러시 toast가 뜨지 않는 부분은 `StrictMode`에 의한것 운영 모드시 toast가 정상적으로 잘 뜹니다.

10. 서식있는 에디터의 요청 내용값의 길이는 서식이(html) 포함된 길이로 계산했습니다.

11. 의도적으로 에러 바운더리는 현 화면상 가장많은 액션과 로직이들어간 main 쪽에서만 걸어두었습니다.

12. 페이지네이션 페이지 사이즈는 `10`/`20`/`50` 으로 생각하고 진행했습니다.
