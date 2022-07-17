1일 차. 

React의 기본 개념

[day01.txt](https://github.com/hyounji375/React/files/9039870/day01.txt)
--------------------------------------------------------------------------------------------------------------------------------------------

2일 차.

React 설치 및 프로젝트 생성

[day02.txt](https://github.com/hyounji375/React/files/9040259/day02.txt)
--------------------------------------------------------------------------------------------------------------------------------------------

복습하다가 궁금한 게 생겨서 강사님께 질문을 드렸다.
왜 App이랑 index가 나뉘어 있는지, 각각의 역할은 뭔지 그리고 gitignore가 무엇인지.

gitignore는 해당 텍스트에 올라가 있는 내용은 깃에 커밋 및 푸쉬가 되지 않는다고 하셨다.
그리고 App이랑 index가 나뉘어 있는 이유는 React를 만든 사람이 그렇게 만들어서 그렇다고 하셨다. 이건 음, 그렇구나 하고 넘어가면 될 사항이었다.
그래도 각각의 역할은 이해할 필요가 있어 보인다.
React는 하나의 기능을 수행하는 components로 구성되는데 이 components를 page라는 폴더에서 합친다. 그리고 이 합쳐진 page를 app.js에서 url로 보여준다.
그다음에 app.js의 return 값을 index.js가 가지고 와서 public 폴더에 있는 index.html의 root를 id로 가지고 있는 div로 render. 

components -> page 폴더 -> url로 app.js에 연결 -> index.js -> index.html
app.js는 components의 상위 폴더, index.js가 최상위 파일

아무래도 쪼개져 있는 기능들을 모아서 하나의 완성체를 만드는 방식이다 보니 이렇게 하는 것 같다.


components render 함수의 기본 형태

const component명 = () => {
  return(
    "html"
)
}
export default 밖에서 사용할 component명

* components명은 대문자로 시작해야 한다.

* <></> === <div></div>

* app.js function에서 return 값을 쓸 때 두 개의 태그를 연달아 쓸 수 없기 때문에 항상 <></>이 태그로 감싸주어야 한다.

ex) function App() {
     return (
       <>
         <Todo />
         <div></div>
      </>
     );
    }

export default App;
--------------------------------------------------------------------------------------------------------------------------------------------

수업을 듣고 어제 수업 때 필기했던 것들과 vs코드를 보고 오늘 직접 프로젝트 만들면서 한 세 번 정도 복습하니까 얼추 이해는 되는 듯하다.
내가 제대로 이해한 거였으면 좋겠는데 혹시 잘못 이해했을까 봐 메일로도 여쭤봤다.

[프로젝트 만들기.txt](https://github.com/hyounji375/React/files/9055636/default.txt)

--------------------------------------------------------------------------------------------------------------------------------------------

0717 3일 차

css 적용하기

1. styled-components 방법.
  - 컴포넌트 파일 상단에서 import styled from "styled-components";를 해준다.
  - const TodoaddInput = styled.input`
  border-radius: 5px;
  width: 500px;
  font-size: 32px;
  position: relative;
  padding-left: 20px;
`; 
이런 식으로 변수에 css 저장하고 return 값에 <TodoaddInput type="text" placeholder="할 일을 적어주세요" /> 이렇게 태그 입력.

2. css 파일을 만들어서 import 하는 방법.
  - 컴포넌트 파일 retrun 값에 있는 div 태그에 <div className="navBar"> 이렇게 className 부여.
  - html과 동일한 방식으로 css 파일을 만들어서 .navBar{...} css 작성.
  - 작성한 css 파일을 적용할 컴포넌트 파일 상단에서 import 해줌. import "css 파일 경로"
  
페이지 이동

pages 폴더에서 컴포넌트들을 모아서 각각의 페이지를 만든다.
예를 들면 a,b,c,d 컴포넌트가 모여서 A라는 하나의 페이지를 만들고 apple, banana, orange 컴포넌트가 모여 fruit라는 페이지가 만들어진다.
그러면 pages 폴더에는 A와 fruit 페이지가 2개 있다.
이 페이지를 react router Dom 라이브러리를 사용해서 서버 주소가 바뀔 때마다 그 주소에 맞는 페이지를 index.html에 보여주는 것이다.
app.js에서 각 페이지를 import 해주고 import { BrowserRouter, Route, Routes } from "react-router-dom"; 이것도 적어준다.
그리고 return에 
<BrowserRouter>
   <Routes>
     <Route path="url(주소)" element={<컴포넌트명/>}/>
   </Routes>
</BrowserRouter>
이렇게 적어주면 로컬호트스 옆에 / 적고 주소를 적으면 element에 적은 페이지가 나온다.
그래서 app.js에서 컴포넌트를 합치는 게 아니라 다른 폴더(pages)를 만들어서 그 폴더에서 컴포넌트를 합치는 것이다.
  
  - <BrowserRouter> : 라이브러리의 최상위 태그
  - <Routes> : Route들을 묶어주는 태그
  - <Route> : 현재 주소와 비교해서 경로에 맞는 컴포넌트만 보여주는 태그
  
  

