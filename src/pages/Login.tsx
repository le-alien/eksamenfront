import { useState } from "react"
import "../index.css"
import { useNavigate  } from "react-router-dom"
import Navigationbar from "../components/Navigationbar";
import ErrorEl from "../components/ErrorEl";

export default () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [errorField, setErrorField] = useState<string>("")
    const checkInfo = async () => {
        if (username == '' || password == '') {
            setErrorField("You need to fill out all the fields")
        } else {
            try{
                const body = `{\"Username\":\"${username}\", \"Password\":\"${password}\"}`
    
                fetch("http://localhost:5000/api/UserController/Login", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.parse(JSON.stringify(body))
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    if (data.error) { 
                        setErrorField(data.error)
                    } else {
                        console.log(data)
                        localStorage.setItem("logged-in", "true");
                        localStorage.setItem("username", data.username);
                        localStorage.setItem("admin", data.admin);
                        navigate("/");
                    };
                });
            } catch(error){
            }
        }
    }

    return(
    <div>
        <Navigationbar></Navigationbar>
        <div className="flex justify-center flex-col justify-items-center max-w-30 m-1">
            <h2 className="self-center">Login!</h2>
            <input className="my-2 w-20 self-center" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"></input>
            <input className="my-2 w-20 self-center" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
            <button onClick={checkInfo}>send</button>
        </div>
        <div className="flex w-screen justify-center my-10">
            <ErrorEl val={errorField}></ErrorEl>
        </div>
    </div>
    )
}