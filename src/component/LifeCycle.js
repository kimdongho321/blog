import React, { useEffect, useState } from "react";

const LifeCycle = () => {
    /* const [count,setCount] = useState(0);
    const [text,setText] = useState("");

    useEffect(()=>{
        console.log("Mount!");
    },[])

    useEffect(()=>{
        console.log("Update!");
    })

    useEffect(()=>{
        console.log(`count is update : ${count}`);
        if(count > 5){
            alert("count가 5를 넘었습니다. 1로 초기화합니다.");
            setCount(1);
        }
    },[count])

    useEffect(()=>{
        console.log(`text is update : ${text}`);
    },[text]) */

    const UnmountTest = () =>{
        return <div>UnmountTest Testing Component</div>
    }

    const [isVisible,setIsvisible] = useState(false);
    const toggle = () => setIsvisible(!isVisible);
    return (
    <div>
        {/* <div>
            {count}
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
        <div>
            <input value={text} onChange={(e)=> setText(e.target.value)}></input>
        </div> */}
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest/> }
    </div>
    )
}

export default LifeCycle;