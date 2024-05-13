import { useState } from "react"
import "../index.css"
import { useNavigate  } from "react-router-dom"

export default () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const checkInfo = async () => {
        try{
            console.log("username:" + username, "password: " + password);
            const body = {
                username,
                password,
            }
            const response = await fetch("http://localhost:7175/api/login", {
                method: "POST",
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
        <div className="flex justify-center flex-col justify-items-center max-w-30 m-1">
            <h2 className="self-center">Login!</h2>
            <input className="my-2 w-20 self-center" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"></input>
            <input className="my-2 w-20 self-center" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
            <button onClick={checkInfo}>send</button>
        </div>
    )
}