 
function Parent()
{
      return(
        <div>
            <h1>Parent</h1>
            <Child result={100}/>
        </div>
      )
}
function Child(pros)
{
      return(
        <div>
            <h1>Child value {pros.result}</h1>
        </div>
      )
}
export default Parent;