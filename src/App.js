import {useRef, useState,useEffect, useMemo} from "react";
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";
import LifeCycle from "./component/LifeCycle"
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

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      //slice = 0부터 20까지 데이터를 자를것임
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        //Math.random()*5 = 0부터 4까지의 난수 생성(소수점까지 포함)
        //Math.floor = 소수점을 없애줌 , +1 = 5까지   
        created_date: new Date().getTime() + 1,
        id: dataId.current++
      };
    });
    setDate(initData);
  };

  useEffect(() => {
      getData();
  }, []);

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

  const getDiaryAnalysis = useMemo(() =>{
    console.log("일기 분석 시작");

    const goodCount = data.filter((it)=>it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount/data.length)*100;

    return{goodCount,badCount,goodRatio};
  },[data.length]
  //data.length가 변화할때만 return반환
  );

  const {goodCount,badCount,goodRatio} = getDiaryAnalysis;

  return (
    <div className="App">
      <LifeCycle/>
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분좋은 일기 개수 : {goodCount}개</div>
      <div>기분나쁜 일기 개수 : {badCount}개</div>
      <div>기분좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
