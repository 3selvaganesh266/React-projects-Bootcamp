import { useState } from "react";
export default function StateHoldObject()
{
    const[Team,setTeam]=useState({ipl:"RCB",icc:"India",pkl:"BB"});
    const changePkl=()=>
    {
        setTeam((prev)=>{return{...prev,pkl:"Bengaluru"}})
    }
    return(
        <div>
            <h1>Fav Team {Team.ipl}</h1>
            <h1>Fav country {Team.icc}</h1>
            <h1>Fav Kabhaddi Team {Team.pkl}</h1>
            <button onClick={changePkl}>on click</button>
        </div>
    )
}
