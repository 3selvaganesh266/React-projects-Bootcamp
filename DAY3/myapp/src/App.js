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
    </div>
  );
}
 
export default App;

