import {useRef, useState} from "react";

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

import { useReducer, useState } from "react";

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
    setData([ newItem,...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data}/>
    </div>
  );
}

export default App;
