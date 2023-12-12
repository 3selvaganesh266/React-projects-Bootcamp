import { Component } from "react";

class StateClass extends Component
{
    state={
        team:"RCB",
        cameron:"17.5cr",
        mayank:"20l",
        starc:"10cr",
    }

    Arrowfun = () => {this.setState({cameron:"15cr"})}
    render()
    {
        return(
            <div>
                <h1>In Action  {this.state.team} purchases the highest price is {this.state.cameron}</h1>
                <button onClick={this.Arrowfun}> click me</button>
            </div>
        )
    }
}
export default StateClass;