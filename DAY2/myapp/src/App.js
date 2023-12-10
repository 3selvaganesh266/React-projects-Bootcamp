import './App.css';

{/* <h4/><input type="checkbox"/>I agree the terms and conditions */}
{/* <input type="submit" id="but" value="submit"/> */}
function App() {
  return (
    <div className="App">
        <form class="o"/>
            <h3 id="pas">LOGIN</h3>
            <label for="username"><h4/>RollNo :  </label>
            <input type="text" id="username" name="username" required/> <br></br> 
            <label for="name"/><h4/>Name :
            <input type="text" id="name" name="name" required/>  <br></br> 

            <label for="dat"/><h4/>Date :
            <input type="date" id="dat" name="date" required/>

            <label for="email"/><h4/>Email :
            <input type="email" id="email" name="email" required/>
            <label for="phone"/><h4/>PhoneNumber :
            <input type="tel" id="phone" name="phone" pattern="{0-9}{10}" required /><br/><br/>
            
            <label/> Gender :  
              <input type="radio" name="male" value="Male" />Male
              <input type="radio" name="male" value="Female" />Female <br></br><br></br>


            <label/> Hobbies :  
              <input type="checkbox"/>Drawing
              <input type="checkbox"/>Singing
              <input type="checkbox"/>Dancing
              <input type="checkbox"/>Sketching
              <input type="checkbox"/>Others
              <input type="text" placeholder="Ex- Teaching" pattern="{50}"/>(Max 50 Characters Allowed)
            
            <label for="states"><h4/>Select yout Country :  </label>
            <select defaultValue="States">
            <option value="States" disabled>States</option>
            <option>Tamilnadu</option>
            <option>Maharastra</option>
            <option>Others</option>
            </select>
          
            <label for="comments"><h4/>Comments :  </label>
            <textarea type="text" id="comments" name="comments" rows="2" cols="15"/> <br></br> <br/>
            
            <input type="Submit" value="Submit"/>

      </div> 
       
  );
}

export default App;
