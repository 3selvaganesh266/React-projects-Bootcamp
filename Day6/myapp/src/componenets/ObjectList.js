function ObjectList()
{
    const Team=[
        {id:1,Team:"RCB",Title:100},
        {id:2,Team:"CSK",Title:0},
        {id:4,Team:"MI",Title:1},
        {id:3,Team:"KKR",Title:2},
    ]

    const one_Team = Team.map((val)=> <li key={val.id}> {val.Team} {val.Title} </li>)

    return(
        <div>
            <ul type="none">{one_Team}</ul>
        </div>
    )
}
export default ObjectList;