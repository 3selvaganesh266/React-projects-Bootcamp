import React from "react";

function TryCatch({fruit}) 
{
   try
   {
        if(fruit === "Banana")
        {
        throw new Error("The fruit is not Banana");
        }
      
   }
   catch(error)
    {
        console.log(error);
      document.write(error);
    }
    finally{
       document.write("Always Work");
   }

   return(
    <div>
        {fruit}
    </div>
   )
}
export default TryCatch;