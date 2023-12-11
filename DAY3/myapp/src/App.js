import Arrow from "./challenge day-2/Arrow.js";
import Classcomponents from "./challenge day-2/Classcomponents.js";
import Classcomponent from "./component/Classcomponent.js";
import Functional from "./component/Functional.js";
import Greeting from "./component/Greeting.js";

 function App() 
 {
   return (
    <div>
      <Functional/> 
      <Classcomponent/>
      <Greeting/>
      <Classcomponents/>
      <Arrow/>
    </div>
  );
}
 
export default App;

