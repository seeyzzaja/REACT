import React ,{ useState } from "react";

function Child({count}) {
    console.log('❌ Child di-render');
    return <p>count : {count}</p>
}

const ChildMemo = React.memo(function ChildMemo({count}) {
    console.log('✅ MemoChild di-render')
    return <p>count : {count}</p>
    
})

function ChildApps() {
    const [count,setCount]= useState(0)
    const [text,setText]= useState('')

    return(
        <>
        <input type="text"
        placeholder="klik di sini"
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>

        <button onClick={()=>setCount(count + 1)}>klik</button>
        <Child count={count}/>
        <ChildMemo count={count}/>
        </>
    )
}

export default ChildApps