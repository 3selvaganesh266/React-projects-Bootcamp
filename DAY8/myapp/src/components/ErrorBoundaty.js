import React, { Component } from 'react'

export default class ErrorBoundaty extends Component 
{
   state={
    Flag:false
   }

   static getDerivedStateFromError(error)
   {
      return{
        Flag:true
      }
   }
   
  render() 
  {
     if(this.state.Flag===true)
     {
        return <h1>Something Happens</h1>
     }
     return this.props.children
  }
}
