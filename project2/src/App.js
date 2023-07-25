import './App.css';
import {useState, useRef} from "react";
import Header from "./component/Header"
import TodoList from './component/TodoList';
import TodoEditor from './component/TodoEditor';
 const mockTodo=[
    {
      id: 0,
      content: "React 공부하기",
      createdDate: new Date().getTime(),
    },
    {
      id: 1,
      content: "빨래 널기",
      createdDate: new Date().getTime(),
    },
    {
      id: 2,
      content: "노래 연습하기",
      createdDate: new Date().getTime(),
    },
  ]
function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content)=>{
    const newItem={
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current+=1;
  }
  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate= {onCreate}/>
      <TodoList/>
    </div>
  );
}

export default App;
