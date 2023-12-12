
import NotPropsFun from "./props/NotPropsFun";
import PropsArrow from "./props/PropsArrow";
import PropsClass from "./props/PropsClass";
import PropsFunction from "./props/PropsFunction";
import SetFunctional from "./props/SetFunctional";

import StateClass from "./props/StateClass";
import StateHoldObject from "./props/StateHoldObject";

 function App() 
 {
   return (
    <div>
       <PropsFunction Name="Selvaganesh" Rollno="215"/>
       <PropsClass college="skct" cls="IT"/>
       <NotPropsFun favTeam="RCB" favsport={"Cricket"}/>
       <PropsArrow favfood="Tomato Rice" favcricketer="King kohli"/>

       <StateClass/>
      <SetFunctional/>

      <StateHoldObject/>
    </div>
  );
}
 
export default App;

