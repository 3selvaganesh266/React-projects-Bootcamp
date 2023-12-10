import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

var n="SKCT"
const display = <div><h1>My Clg Is {n}</h1> <p>Selvaganesh</p> </div>


const val=<h1 style={{color:"blue"}}>HELLO</h1>



var ans=<ol start={2} type='i'>
  <li>a</li>
  <li>b</li>
  <li>c</li>
  <li>d</li>
</ol>


const age=19;
var vote=<h1>{age>18 ? "ok" : "no"}</h1>;



var ans;
if(age>18)
{
   ans="ok";
}
else
{
  ans="no";
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
