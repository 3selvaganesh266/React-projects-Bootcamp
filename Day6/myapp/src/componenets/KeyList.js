function KeyList()
{
    const Team=["RCB","CSK","DC","KKR"];

    const one_Team = Team.map((val,index)=><li>{index} {val}</li>)

    return(
        <div>
            <ul type="none">{one_Team}</ul>
        </div>
    )
}
export default KeyList;