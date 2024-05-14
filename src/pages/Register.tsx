import { useState } from "react"
import "../index.css"
import { useNavigate  } from "react-router-dom"
import Navigationbar from "../components/Navigationbar";

export default () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [passwordhash, setPassword] = useState<string>("");
    const checkInfo = async () => {
        try{
            console.log("username: " + username, "email: " + email, "password: " + passwordhash);
            const body = {
                username,
                email,
                passwordhash,
            }
            const response = await fetch("http://localhost:7175/api/register", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.parse(JSON.stringify(body))
            });
            if (response.ok) {
                localStorage.setItem('logged in', 'true')
                navigate("/home");
            } else {
                console.error("Something went wrong")
            }
        } catch(error){
            console.error("error" + error)
        }
    }

    return(
    
    <div>
        <Navigationbar></Navigationbar>
        <div className="flex justify-center flex-col justify-items-center max-w-30 m-1">
            <h2 className="self-center">Register!</h2>
            <input className="my-2 w-20 self-center" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"></input>
            <input className="my-2 w-20 self-center" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
            <input className="my-2 w-20 self-center" value={passwordhash} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
            <button onClick={checkInfo}>send</button>
        </div>
    </div>
    )
}