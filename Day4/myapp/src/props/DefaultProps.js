import React from "react";
export default function DefaultProps(props)
{
    return(
        <div>
            <h1>defaultprops</h1>
            <h1>My hobby is {props.hobby}</h1>
        </div>
    )
}
DefaultProps.defaultProps={
    hobby:"football"
}

