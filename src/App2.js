import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import Board from './component/Board';

function App2() {
let list=[
  { id: "1", name: "V", addr: "Seoul" },
  { id: "2", name: "Sugar", addr: "Daegu" },
  { id: "3", name: "NamJun", addr: "Ilsan" },
]

  return (
    <div>
    <Header></Header>
    <Menu list={list}></Menu>
    <Board></Board>
 </div>
  );
}

export default App2;
