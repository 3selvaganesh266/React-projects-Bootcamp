import { useState } from "react"
function SetFunctional()
{
    const[count,setcount]=useState(0);

    const setinc = ()=>setcount(count+1);
    const setdec = ()=>setcount(count-1);
    return(
        <div>
        <h1>counter is {count}</h1>
        <button onClick={setinc}> increment </button>
        <button onClick={setdec}> decrement </button>
        </div>
    )
}

export default SetFunctional;