import { useNavigate } from "react-router-dom";

export default function Navigate()
{
    const navigate = useNavigate();
    const loginBut=()=>{navigate("/login")}
    const signup=()=>{navigate("/signup")}
    return(
        <div>
            <button onClick={loginBut}>Login</button>
            <button onClick={signup}>signup</button>
        </div>
    )
}