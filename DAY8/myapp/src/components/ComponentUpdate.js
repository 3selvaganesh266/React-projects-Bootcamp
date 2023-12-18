import React, { Component } from 'react'

export default class ComponentUpdate extends Component 
{
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        document.getElementById("id1").innerHTML="Previous value "+prevState.favColor;
    }
    
    componentDidUpdate()
    {
        document.getElementById("id2").innerHTML="Current value "+this.state.favColor;
    }

  render() {
    return (
      <div>
        <h1>My favcolor is {this.state.favColor}</h1>
        <p id='id1'/>
        <p id='id2'/>
      </div>
    )
  }
}
