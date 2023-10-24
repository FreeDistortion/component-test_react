import './App.css';

function InnerHeader(props){
    return(
    <header>
        <h1>{props.title}, {props.name}</h1>
        {/* {title} */}
      </header>)
}
function InnerMenu(props){
    return(
        <nav>
        <ol>
          <li>INNER{props.lan} JSX문법{props.no}</li>
          <li>INNER{props.lan} 컴포넌트만들기{props.no}</li>
          <li>INNER{props.lan} props{props.no}</li>
        </ol>
      </nav>
);
}

function InnerBoard(){
    return(
<div>
        <table width={500} border={1}>
            <thead>
          <tr>
            <th>번호</th><th>제목</th><th>작성자</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td><td>리액트 JSX문법</td><td>뷔</td>
          </tr>
          <tr>
            <td>2</td><td>리액트 컴포넌트만들기</td><td>슈가</td>
          </tr>
          <tr>
            <td>3</td><td>리액트 props</td><td>RM</td>
          </tr>
          </tbody>
        </table>

      </div>


    );
    }
function App3() {
  return (
    <div>
        <InnerHeader title="jsx" name="jsxName"></InnerHeader>
        <InnerHeader title="board"></InnerHeader>
        <InnerHeader title="erp"></InnerHeader>
        <InnerMenu lan="React" no="1"></InnerMenu>
        <InnerBoard></InnerBoard>

    </div>
  );
}

export default App3;
      