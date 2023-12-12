import { useState } from "react";
function Dynammicrending()
{
   const[variable]=useState(198)
   if(variable%2===0)
   {
       return(
        <div>
            <h1>Is Divisible by 2</h1>
        </div>
       )
    }
    else
    {
       return(
        <div>
            <h1>Is not Divisible by 2</h1>
        </div>
       )

   }
}
export default Dynammicrending;