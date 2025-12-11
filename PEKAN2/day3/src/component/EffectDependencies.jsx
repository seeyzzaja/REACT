import { useEffect,useState } from "react";
import UseEffect from "./Hooks";

function Dependencies(params) {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log('timmer di mulai');
        let interval = setInterval(()=>{
            setCount(prevCount => prevCount +1)
        },1000)
         return ()=>{
        clearInterval(interval)
        console.log('timmer dihentikan');
        
    }

        
    },[])
    return(
        <>
        <h2>detik : {count}</h2>
        </>
    )

}

export default Dependencies