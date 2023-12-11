import React from 'react';
const Greeting = () => {
    const name="Selvaganesh";
    const date=new Date().toLocaleDateString('en-US',{
        weekday:'long',
        month:'long',
        year:'numeric',
        day:'numeric',
    });

    return (
        <div>
            <h2>hi da {name}.</h2>
            <p>{date}</p>
        </div>
    )
}
export default Greeting;
