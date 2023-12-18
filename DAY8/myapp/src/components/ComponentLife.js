import React, { Component } from 'react'

export default class ComponentLife1 extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={favTeam:"RCB"}
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({favTeam:"India"})},5000)
    }
    shouldComponentUpdate()
    {
        return false
    }
  render() {
    return (
      <div>
        <h1>My FavTeam is {this.state.favTeam}</h1>
      </div>
    )
  }
}

