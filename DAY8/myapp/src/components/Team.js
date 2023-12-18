function Team({TeamName})
{
    if(TeamName === "CSK")
    {
        throw new Error("The TeamName is not CSK")
    }
    return(
        <div>
            {TeamName}
        </div>
    )
}
export default Team;