function PropsList(props)
{
    return(
        <div>
            {props.name}
        </div>
    )
}

 export default function Display()
{
    const Name=["Kohli","Dhoni","Rohit","ABD"]
    const Dis_Name=Name.map((variable)=><PropsList name={variable}/>)
    return(
        <div style={{backgroundColor:"Yellow"}}>
            {Dis_Name}
        </div>
    )
}
