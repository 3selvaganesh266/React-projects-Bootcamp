import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigate from './components/Navigate';
import Login from './components/Login';
import OnlySign from './components/OnlySign';


function App() 
{
   return (
    <div>
      <BrowserRouter>
      <Navigate/>
      <Routes>
        <Route path="/login" element = <Login/> > </Route>
        <Route path="signup/" element = <OnlySign/> > </Route>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

