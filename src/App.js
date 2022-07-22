import {useRef, useState} from "react";
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";
/* import logo from './logo.svg';
import './App.css';
import DiaryEditor from './component/DiaryEditor';
import DiaryList from './component/DiaryList';

const dummyList = [
  {
    id:1,
    author:"김동호",
    content:"하이 1",
    emotion:5,
    created_date: new Date().getTime(),
  },
  {
    id:2,
    author:"김동호",
    content:"하이 2",
    emotion:2,
    created_date: new Date().getTime(),
  },
  {
    id:3,
    author:"김동호",
    content:"하이 3",
    emotion:3,
    created_date: new Date().getTime(),
  }
] */



function App() {

  const [data,setDate] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author,content,emotion) => {
    const create_date = new Date().getTime();
    const newItem ={
      author,
      content,
      emotion,
      create_date,
      id : dataId.current
    }
    dataId.current += 1;
    setDate([ newItem,...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`)
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setDate(newDiaryList);
  }

  const onEdit = (targetId,newContent) => {
    setDate(
      data.map((it)=>
      it.id === targetId ? {...it,content:newContent}: it)
    )
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
