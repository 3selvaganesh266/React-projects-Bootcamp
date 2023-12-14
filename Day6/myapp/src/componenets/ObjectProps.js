function ObjectProps(props)
{
    return(
        <div>
            {props.name}
        </div>
    )
}

 export default function YearDisplay()
{
    const Name=[{rcb:1,ip:"18 years"},
     {rcb:2,ip:"10 years"},
    {rcb:3,ip:"9 years"},
    {rcb:4,ip:"7 years"},
]
    const Dis_Name=Name.map((variable) => <ObjectProps key={variable.rcb} name={variable.ip}></ObjectProps>)
    return(
        <div style={{backgroundColor:"Yellow"}}>
            {Dis_Name}
        </div>
    )
}
