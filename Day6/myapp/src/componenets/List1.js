function List1()
{
    const Team=["RCB","CSK","DC","KKR"];

    const one_Team = Team.map((val)=><li> {val}</li>)

    return(
        <div>
            <ul type="none">{one_Team}</ul>
        </div>
    )
}
export default List1;