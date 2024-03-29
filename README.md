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
  
--------------------------------------------------------------------------------------------------------------------------------------------
 
0718 4일 차 복습
  
  1. 삼항연산자
    - {props.isLover ? <span>❤</span> : "🤢"} 
      이런 식으로 조건이 true(값이 있다면)면 하트를, false라면 이모티콘이 나타난다.
  2. props
  3. 비구조화 할당(구조 분해 할당)
    - 객체가 있다면 그 객체의 키를 사용해서, 배열은 인덱스 순서대로 값을 가져온다.
      ex) const object = {name : "apple", color : "red"}
          const { name, color } = object; -> 비구조화 할당
          => 기존에는 apple값을 얻기 위해서는 console.log(object.name); 이렇게 해야 했는데 비구조화 할당을 하면 console.log(name);만 해도 apple가 나온다.
      ex) const arry = ["spring", "summer", "fall", "winter"];
          const [봄, 여름, 가을, 겨울] = arry; -> " " 는 붙이지 않는다.
          console.log(봄); => spring
      
  [day04.txt](https://github.com/hyounji375/React/files/9132589/day04.txt)
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0723 5일 차 내용
  
  [day05.txt](https://github.com/hyounji375/React/files/9174007/day05.txt)
  
  0725 5일 차 복습
  
  1. useState 
    - const [color, setColor] = useState("red") 형식으로 사용한다.
      const [변수명, 변수를 재할당해주는 함수명] = useState(변수의 기본값)이다.
    - setColor("blue")를 해주면 color 변수의 값이 red에서 blue로 바뀐다.
    - useState를 사용하기 위해서는 상단에 import { useState } from "react"를 해주어야 한다.
  
  2. map
    - 객체 형식의 변수를 가져와서 반복되는 형식으로 뿌려줄 때 사용.
    - const [color, setColor] = useState([{id : 1, name : "red"}, {id : 2, name : "blue"}, {id : 3, name : "yellow"}])
      이런 식으로 변수에 객체가 있는 경우 이 객체의 길이만큼 반복할 때 사용.
    - 변수명.map((객체를 담을 변수)=>(실행문))
      ex) color.map((C) => console.log(`${C.id}번의 색상은 ${C.name}입니다.`)
      => 1번의 색상은 red입니다.
         2번의 색상은 blue입니다.
         3번의 색상은 yellow입니다.
  
    * 화살표 함수를 해준 뒤 {}가 아닌 ()를 써야한다!
  
  0726 5일 차 코드 복습
  
  어제 map까지는 이해가 갔는데 기존의 배열에서 input 태그에 입력한 값을 id와 함께 추가하는 코드 부분이 이해가 안 갔었다.
  혼자서 코드 보면서 따라 치며 해봤는데 흐름도 눈에 안 보이고 에러도 나고 머리 아파서 잤다.
  그리고 오늘 녹화본 다시 보면서 설명을 들으니 확실하게 이해가 갔다.
  수업 당시에는 코드 따라치기 급급해서 찬찬히 생각할 여유가 없었는데 녹화본은 일시 정지하고 코드 보면서 흐름을 알 수 있으니 이해가 더 잘 갔다.
  
  어제 이해 안 간 부분이 같은 기능을 하는 onClick을 왜 두 개의 컴포넌트에 다 줬는지였다.
  그 이유는 매개변수 때문이었다.
  추가 버튼을 누르면 4번의 색상은 green입니다. 이런 식으로 값이 추가되어야 한다.
  근데 그러기 위해서는 4라는 값과 green이라는 값 2개를 받아야 하기 때문에 그 값들을 받아주기 위해서 또 다른 함수를 만들고 그 함수 안에는 state에서 만들어준 함수를 넣고 addState의 추가 버튼에 새로 만든 함수를 넣어준 것이다.
  
  그리고 또 이해가 안 갔던 부분이 state.js에서 <Addstate/>를 한 부분이었다.
  state에서 객체를 선언해줬으므로 복사도 여기서 해줘야하는 것 같다.
  추가 버튼을 누르면 id와 name이 입력되도록 onclick 함수를 만들어야하는데 그러기 위해서는 일단 color 객체를 복사해주어야 한다.
  그래서 ...을 이용해서 [...color, {id:idValue, name:nameValue}] 이렇게 복사를 하고 뒤에 값이 추가되도록 적어준다.
  근데 추가 버튼은 addstate에 있으니까 state에서 <Addstate onclickEvent={onClick}> 이렇게 값을 전달해준 것이었다. 
  그리고 Addstate에서는 위 문단에서 말한 바와 같이 이 onClick 함수를 매개 변수 2개를 받아야 하니까 또 다른 함수를 만들어 준 것이고.
  
  또 이게 뭐지 했던 부분이 color.length > 0 && color[color.length - 1].number 이거였다.
  이게 id값을 추가해주기 위한 것인데 값을 입력하고 추가를 하면 4번은..., 5번은..., 6번은... 이런 식으로 id값이 나타난다.
  그렇게 하기 위해서는 현재 id값을 알아야 하는데 그것을 위한 식이다.
  color는 배열이기 때문에 color.length-1은 항상 마지막 인덱스 번호이다. 그래서 color[color.length - 1].number는 color배열의 마지막 인덱스의 id값인 거다.
  그런데 배열 길이가 0이 될 수도 있기 때문에 color.length > 0 이라는 조건을 하나 더 달아준 것이다. 
  &&로 묶여있으므로 둘 다 true여야 한다.
  
--------------------------------------------------------------------------------------------------------------------------------------------
  
  0724 6일 차 내용
  
  [day05.txt](https://github.com/hyounji375/React/files/9191010/day05.txt)
  
  0727 6일 차 코드 복습
  
  초기화 버튼의 함수를 만들 때 왜 useRef를 썼는지 기억이 안 나서 다시 영상을 보니 그냥 돔 객체에 접근하는 방법을 가르쳐주기 위해서라고 하셨다.
  current를 써서 돔 객체에 접근할 수가 있다.
  
  초기화 버튼에 reset 함수를 만들어주고 reset 함수 안에 setColor("") 이것만 넣어주면 입력칸에 글자를 썼다가 초기화 버튼을 누르면 글자가 사라진다.
  
  그 다음으로 해준 게 focus이다.
  값을 초기화하면 입력칸의 포커스가 사라진다. 값을 다시 입력하기 위해서는 마우스로 클릭해줘야 하는 번거로움이 있다. 그래서 값을 초기화해도 그대로 커서가 있도록 focus 함수를 넣어줬다.
  focus()를 쓰기 위해서는 돔 객체에 접근해야 하는데 이를 위해 useRef를 쓴 것 같다.
  focus 되는 게 input 태그니까 여기에 ref 속성에 nameInput이라는 값을 주고 이 nameInput을 useRef(null)로 선언해준다.
  초기화 버튼을 누른 후에도 포커스가 되게 해줄 거니까 reset 함수에 nameInput.current.focus();를 써주면 된다.
  
  값을 추가할 때 엔터키를 눌러도 추가되게끔 해줬다.
  버튼을 누르는 게 아니고 엔터를 누르는 것이기 때문에 input 태그에 onKeyPress 속성을 주고 값에 함수를 AddEnter라고 넣어줬다.
  AddEnter 함수에서는 자기 자신을 매개변수로 가져와야 하므로 e를 써서 가져오고 if문을 작성해줬다.
  이때 console.log(e)를 찍어보면 key : "Enter"라고 나와있다. 그래서 이 key의 값이 Enter와 일치하면 값을 추가해주는 함수였던 onClick(stateNum +1, name)이 작동되도록 하면 된다.
  그리고 입력이 되면 다시 setColor("")를 써서 입력칸을 초기화해준다.
  
  삭제 버튼 구현도 코드 복습 완료했다.
  3가지 버전으로 구현했는데 하나는 삭제 버튼 객체를 매개변수로 받아와서 filter를 이용하는 방법이다. 그래서 내가 삭제 버튼을 누른 값의 number를 가져와야 하는데 그러기 위해서 삭제 버튼에 value 속성을 map에서 준 매개변수와 동일하게 C.number 이런 식으로 값을 준다. 그래서 내가 누른 버튼의 number 값이 e.target.value라는 객체 전체의 number 값과 같지 않은 것만 가져오는 방식이다.
  
  두 번째는 삭제 기능이라기 보다는 useRef로 배열 형식으로 여러 값을 가져올 수 있다는 것을 배웠다. 마치 QueryAllSelectors와 같은 기능이다.
  배열명을 하나 만들어서 colorArr = useRef([]); 이렇게 빈 배열을 하나 만들어준다. 그리고 삭제 버튼에 ref 속성을 주고 그 값은 {(el) => (colorArr[i] = el)} 이렇게 준다.
  여기서 el은 매개변수로 ref의결과값을 가져온다. map에서 객체 3개를 받아오는 거니까 [i]에도 그 객체가 그대로 들어가서 인덱스 번호가 되는 것 같다.
  
  세 번째는 첫 번째 방식과 똑같은데 매개변수를 받는 방식이 다르다. 첫 번째는 자기 자신을 매개변수로 해서 e를 썼는데 세 번째 방식은 매개변수를 받아온다. 그래서 실행문이 첫 번째와는 다르다.
  첫 번째는 삭제 버튼에 그냥 onClick={실행할 함수명} 이렇게 적어줬는데 세 번째는 onClick={()=>함수명(매개변수)} 이렇게 적어줬다.
  
  0728 6일 차 내용 복습
  
  1. useMemo : 연산된 값을 반환하여 랜더링 되었을 때 재사용할 수 있도록 해주는 Hooks 함수
               함수가 선언되면서 바로 실행되기 때문에 보통 useMemo에는 함수가 아닌 값을 넣어준다.
  
  2. useCallback : 특정 함수를 새로 만들지 않고 랜더링 되었을 때 재사용할 수 있도록 해주는 Hooks 함수
  
  3. 메모이제이션 : 동일한 계산을 반복해야 할 때 이전에 계산된 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램이 최적화되도록 하는 것.
  
  => 값이 바뀌지 않으면 랜더링을 하지 않는다.
  
  6일 차 코드 복습
  
  const [color, setColor] = useState("green");
  const [text, setText] = useState("");

  const getColor = useMemo(() => console.log(`색은 ${color}입니다.`), [color]);
  const getText = useMemo(
    () => console.log(`텍스트는 실행하지 않습니다.`),
    [text]
  );

  const changeColor = () => {
    if (color === "green") {
      setColor("pink");
    } else {
      setColor("green");
    }
  };
  
  이렇게 하면 변경 버튼을 누를 때마다 changeColor 함수가 작동하므로 색이 그린에서 핑크로, 핑크에서 그린으로 바뀐다. 값이 바뀌기 때문에 랜더링이 되어 콘솔로그도 계속 찍힌다.
  그런데 텍스트는 setText를 사용하지 않았기 때문에 값에 변경이 없다. 그리고 useMemo를 사용했기 때문에 getText 함수는 실행되지 않는다. 따라서 맨 처음 딱 한 번만 찍히고 그 이후로는 찍히지 않는다.
  
  useCallback에서 의존성 배열을 비워놓으면 값이 바뀐 것을 인지하지 못해서 변경 버튼을 한 번 눌렀을 때는 색상이 바뀌지만 두 번째부터는 색상이 바뀌지 않는다.

  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0730 7일 차
  
  [day07.txt](https://github.com/hyounji375/React/files/9228791/day07.txt)

  0731 7일 차 내용 복습
  
  1. useEffect
    - 마운트(화면이 처음 랜더링될 때)와 언마운트(화면이 사라질 때) 시 특정 작업을 실행할 때 사용.
    - useEffect(() => {실행문}, [의존성 배열])
    - 의존성 배열 부분이 비어있으면 처음 화면이 랜더링될 때만 실행, 의존성 배열에 값이 있으면 값이 바뀔 때마다 실행.
  
  2. todolist 한 번 더 만들어 봤다.
  
  0801 7일 차 내용 복습
  
  1. useReducer
    - 상태를 변화시키는 로직을 하나 만든다. 이 로직은 매개변수로 state와 action을 받는다.
      export const reducer = function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
    - const Reducer = () => {
       const initialState = 0;
       const [number, dispatch] = useReducer(reducer, initialState)};
      이렇게 있으면 reducer는 아까 만든 로직. 그러면 initialState가 이 로직으로 전달되어서 state 값으로 간다.
      그리고 dispatch는 action을 전달하는 매개체이다.
      useReducer로 인해서 변수 initialState는 state화 된다.
      useReducer는 reducer와 initialState를 매개변수로 받아서 number와 dispatch를 반환.
    -   const onIncrement = useCallback(() => {
    dispatch({
      type: "INCREMENT",
    });
  }, []);
  
      이런 식으로 dispatch 함수를 써서 로직의 action.type값을 전달해준다.
  
  2. ContextAPI : 전역으로 state를 관리.
    - ontext.Provider와 children을 사용해서 모든 컴포넌트에 state를 전달해준다.
    - reducer와 함께 쓰인다.
  
   오늘 전체적인 흐름, 즉 값이 어디로 어떻게 전달되어서 사용되는지는 파악이 된 듯하다. 
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0731 8일 차
  
  [day08.txt](https://github.com/hyounji375/React/files/9228792/day08.txt)

  0804 8일 차 내용 복습
  
  1. redux 
    - 전역 상태 관리를 위한 라이브러리.
    - 사용하기 위해서는 react-redux, redux, redux-devtools-extension 이 3가지를 설치해줘야 한다.
  
  녹화본을 보면서 다시 이해하며 따라 만들었는데 이해는 가는데 잘 모르겠는 느낌??
  그러니까 강의에서 쓴 코드가 어떤 흐름으로 동작하는지는 알겠는데... 음..알겠는데 잘 모르겠다
  todolist 다시 만들어 보고 redux를 이용해서 또 만들어 보고 반복해봐야겠다.
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0806 9일 차
  
  퍼블리싱된 html과 css를 리액트로 옮기면서 컴포넌트화 함.
  
  0808 9일 차 수업 복습
  
  1. ThemeProvider
    - 웹페이지에서 쓰이는 메인 색상과 서브 색상을 전역 상태로 만들어서 사용.
    - export const theme = {
             mainColor: "#00c7ae",
             subColor: "#ffffff",
             };
     이런 식으로 export를 해주고 
     index.js에서 ThemeProvider와 theme를 import를 해준다.
     <ThemeProvider theme={theme}>
       <App />
     </ThemeProvider>
     이렇게 하면 App 태그에 색상이 적용되어 전체적인 색상을 설정할 수 있다.
  
  2. children
    - const MyBlogLayout = ({ children }) => {
       return (
        <>
          <LayOutHeader />
            {children}
          <LayOutFooter />
        </>
  );
};
  이렇게 한 후에 다른 컴포넌트나 app.js에서 MyBlogLayout을 사용하면 <MyBlogLayout></MyBlogLayout> 안에 있는 자식 컴포넌트들을 가지고 올 수 있다.
  그러면 위의 return에서 {children} 자리에 아까 가지고 온 자식 컴포넌트들이 들어간다.
  
  3. console.log(process.env.NODE_ENV);
    - 개발용인지 배포용인지 알아볼 수 있는 리액트 자체 지원 기능.
    -  npm start => development, npm build => production
 
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0807 10일 차
  
  [day10.txt](https://github.com/hyounji375/React/files/9276991/day10.txt)
  
  0809 10일 차 내용 복습
  
  1. <Link to="/login">로그인</Link>
    - 리액트에서는 주소 이동이 아니라 페이지를 변경시켜서 보여주는 방식이기 때문에 a 태그를 쓸 수 없다.
      그래서 react-router-dom의 Link 태그를 대신 사용한다. 
      기능은 a 태그와 비슷하며 to는 a 태그의 href 역할이다.
      f12로 개발자 도구에서 보면 Link 태그지만 a 태그로 나온다.
  
  2. autoComplete="off"
    - 텍스트를 기억해서 글자가 자동 완성되는 기능을 끄는 속성.

  0810 10일 차 내용 복습
  
  1. 비밀번호 일치 불일치 확인하기
   1) useRef 이용
    - const password = useRef("");
      const confirmPassword = useRef(""); 를 하고 각각의 input 태그에 ref={password}, ref={confirmPassword}로 속성을 넣어준다.
      그리고 const [resultPw, setResultPw] = useState(false);도 만들어준다.
    - onRegistHandler = useCallback(() => {
        if(password.current.value !== confirmPassword.current.value){
            setResultPw(true);
              return;
       } else { console.log("회원가입 성공");
        }
       }, []);
     함수도 하나 만들어준다.
    - 함수 onRegistHandler는 가입하기 버튼에 연결해준다.
    - 마지막으로 {resultPw && <p>비밀번호가 일치하지 않습니다.</p>} 이렇게 적어주면 된다.
    => resultPw가 true면 비밀번호가 일치하지 않는다는 뜻이므로 위의 p태그가 나타나고 만약 false면 비밀번호가 일치하는 것이니까 회원가입 성공이 콘솔로그에 찍힌다.
  
   2) useInput 이용
    - 커스텀 훅 중 하나인 useInput.
      export const useInput = (initialValue = null) => {
      const [value, setValue] = useState(initialValue);

      const handler = useCallback((e) => {
       setValue(e.target.value);
      }, []);
      return [value, handler, setValue];
     };
    - 이렇게 export 한 useInput을 다른 컴포넌트에서 import 해서 사용할 수 있다.
    - const [password, onChangePassword, setPassword] = useInput(""); 이렇게 배열로 useInput을 가지고 온다.
      value 자리에는 password, handler 자리에는 onChangePassword가 setValue 자리에는 setPassword가 들어간다.
    - const [confirmPassword, setConfirmPassword] = useState("");
       //비밀번호 한 번 더 입력하는 값
      const [passCheck, setPassCheck] = useState(false);
  
  const onConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value); //비밀번호 확인칸에 입력한 값
      setPassCheck(e.target.value !== password);
      //비밀번호 확인칸에 입력한 값과 비밀번호 칸의 값이 일치하지 않으면 true
    },
    [password]
  );
  
  const onRegistHandler = useCallback(
    (e) => {
      if (passCheck) {
        if (!alert("비밀번호가 일치하지 않습니다.")) {
          setConfirmPassword("");
        }
        return;
      }
      console.log("회원가입 완료");
    },
    [passCheck]
  );
  // passCheck가 true면 비밀번호가 일치하지 않는다는 것. 일치하지 않으므로 alert 창을 띄워서 확인하게 한 후 확인 버튼을 누르면 setConfirmPassword("")가 실행되어 비밀번호 확인칸이 리셋된다. 그리고 passCheck가 false면 비밀번호가 일치하므로 회원가입 완료가 콘솔에 찍힌다.
  - {passCheck && confirmPassword && (<CheckMessage>비밀번호가 일치하지 않습니다</CheckMessage>)}
     passCheck가 true고(일치하지 않음) confirmPassword의 값이 있으면 체크메시지가 나타난다.
  
  2.  e.preventDefault();
    - form 자체의 기본 기능을 막는다. 즉, 버튼의 기능을 막아서 submit이 안 되게 해준다.
  
  0811 10일 차 내용 복습
  
  1. redux saga 세팅 방법
    - src 폴더 안에 reducer, saga, store 폴더를 만든다.
    - reducer에 index.js를 만들어서 rootReducer를 만들어준다.
  
      import { combineReducers } from "redux";

      const rootReducer = combineReducers({});

      export default rootReducer;
  
    - saga 폴더에 index.js를 만들어서 rootSaga를 만들어 export 해준다.
  
      import { all } from "redux-saga/effects";

      export default function* rootSaga() {
        yield all([]);
      }
      *은 제너레이터, 즉 yield를 사용하기 위해 붙여준 것이다. yield는 제너레이터 함수이며 기능은 await와 같다. 이걸 실행하고 그다음 로직을 실행하라는 의미.
      제너레이터란 yield와 같이 비동기 처리를 동기적으로 처리할 수 있는 파이썬의 기능이다.
      all은 redux saga에 있는 일종의 기능이자 함수이다. all([])의 [] 안에는 saga 로직들이 들어가는데 그것들을 다 선택하겠다는 의미로 combinereducer의 역할이라고 생각하면 된다.
  
  - store 폴더에서 index.js를 만들어서 세팅을 하면 된다.
    세팅법이 복잡하고 길어서 store 폴더를 따로 만든 것이다.
  
      import { applyMiddleware, createStore } from "redux";
      import { createLogger } from "redux-logger";
      import rootReducer from "../reducer/_index";
      import { composeWithDevTools } from "redux-devtools-extension";
      import createSagaMiddleware from "@redux-saga/core";
      import rootSaga from "../saga/_index";

      const logger = createLogger();
      //리덕스의 실행 콘솔을 찍어주는 미들웨어를 사용하고 변수에 담아줌. createLogger의 리턴값을 담아주는 것.

      const sagaMiddleware = createSagaMiddleware();
      //리덕스 사가를 실행하기 위해 변수에 담아준 것.

      const createConfigure = () => {
       const store = createStore(
         rootReducer,
          process.env.NODE_ENV === "development"
           ? composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
           : applyMiddleware(sagaMiddleware)
        );
        //개발 환경일 때는 데브툴즈, 로거 포함. 개발환경이 아닐 때는 사가만 포함.

        sagaMiddleware.run(rootSaga);
        //사가를 실행하기 위한 함수. createStore를 실행할 경우 적용하기 위해 함수 안에 삽입.
        return store;
       //설정값을 리턴.
      };
      //store를 리턴으로 받기 위한 함수.

      export default createConfigure;

    - 마지막으로 index.js에서 Provider로 감싸주면 된다.
  
      import React from "react";
      import ReactDOM from "react-dom/client";
      import "./index.css";
      import App from "./App";
      import createConfigure from "./store/store";
      import { Provider } from "react-redux";

      const store = createConfigure();
      //saga 실행 함수
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <Provider store={store}>
         <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      );
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0813 11일 차 리액트 마지막 수업
  
  [day10.txt](https://github.com/hyounji375/React/files/9331643/day10.txt)

  0815 11일 차 복습
  
  1. immer
    - state의 불변성을 지켜주는 라이브러리.
    - ...을 사용해서 복사할 필요가 없다.
    - npm i immer
            
  2. faker-js/faker
    - 더미데이터를 만들어서 마치 백엔드에서 데이터를 받아오는 것처럼 만들어주는 라이브러리.
    - npm i @faker-js/faker
  
  3. useEffect
    -  useEffect(() => {
    if (!editPost) {
      console.log("참");
    }
    return () => console.log("닫힘");
  }, [editPost]);
  => 처음에 "참", "닫힘" 둘 다 콘솔로그에 찍히고 메인 페이지에서 다른 페이지로 이동하면 "닫힘"만 또 찍힌다.
     즉, 해당 컴포넌트에서 나가면 return에 적어준 내용이 실행된다.
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0817 New_Blog 컴포넌트 나뉜 거 뜯어보기

  - 폴더 개수 많다... 폴더 안에 폴더 안에 또 폴더...
  - 검색창 컴포넌트도 아예 따로 만드셨구나
  - 프롭스 장난없다;;
  - 혼자 먼저 해보고 볼걸... 내일 안 보고 혼자 컴포넌트 나누는 거 해봐야지

  --------------------------------------------------------------------------------------------------------------------------------------------
  0904 
  
  리액트로 만든 블로그에 DB 연결하는 수업
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0913
  
  todoList 안 보고 만들 수 있을 때까지 계속 만들기
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0914 
  
  todoList 이해 및 암기 완료
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0915 
  
  myblog 
 
--------------------------------------------------------------------------------------------------------------------------------------------
  
  0917
  
  기업 과제 풀어보는 수업
  
  reducer, contextAPI 이해 및 암기
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0918 
  
  채팅 구현하는 수업

  --------------------------------------------------------------------------------------------------------------------------------------------
  
  0919 
  
  redux 복습
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  1002 마지막 수업
  
  
  테스트 코드
  TDD, jest, RTL 등
  
  [last.txt](https://github.com/hyounji375/React/files/9692668/last.txt)

  
