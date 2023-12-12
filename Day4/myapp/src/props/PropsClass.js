import React, { Component } from 'react';
class PropsClass extends Component
{
    render()
    {
        return(
            <div>
                <h1>My clg is {this.props.college} Department is {this.props.cls} </h1>
            </div>
        )
    }
}
export default PropsClass;

