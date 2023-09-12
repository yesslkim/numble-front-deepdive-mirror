```bash
npm install

npm run dev

npm run storybook
```

## 결과물

- 결과물 링크 : https://numble-front-deepdive-ys.vercel.app/
- 결과물 브랜치 : `develop`

## 프로젝트 설명

Dummy JSON 데이터를 바탕으로 만들어진 이커머스 서비스 입니다.  
<br />
다소 아주 투박한 디자인 형태일 수 있음을 말씀드립니다.

2주동안 영엽일 기준으로 하루에 한문제씩 풀 수 있도록 총 10개의 문제를 준비하였고  
기타 점수엔 반영되진 않지만 빨리 이슈를 해결하는 사람들을 위해서 추가적인 이슈를 더 등록해 두겠습니다.
`[추가]` 라는 내용을 타이틀에 붙여두도록 하겠습니다.

## 프로젝트 구조

```
이게 어떤 정답을 갖고 있는 구조라기보다는
아 이런 구조로 프로젝트를 구성하기도 하는구나 하는
하나의 케이스 정도로 봐주시면 될것같습니다.
```

- api: fetch 관련 파일들이 있습니다.
- app: app routing 을 사용합니다.
- components: 전역적으로 사용될 수 있는 아토믹한 컴포넌트 모음입니다.
- constants: 프로젝트내에서 필요한 상수들을 정의한 폴더입니다.
- container: 페이지 단위로 지역적으로 필요한 컴포넌트들을 정의합니다.
- hooks: 커스텀 훅을 정의합니다.
- providers: 전역에서 주입할 프로바이더를 정의합니다
- types: 각종 타입을 정의합니다.
- utils: 유틸성 함수를 정의합니다.

## 추가 가이드

- PR 과 커밋내용에 따라서 추가내용 요청이나 일부 코멘트가 달릴 수 있습니다.

### 참고자료

- [Javascript Error Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
  - 자바스크립트에선 이렇게 다양한 에러가 발생할 수 있습니다. 이 중 대부분은 린트나 타입스크립트 그리고 vscode 같은 코드 작성 에디터에서 걸러지기도해서 참고용으로 봐주세요
