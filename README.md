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

