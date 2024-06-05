import { useState } from "react"
import "../index.css"
import { useNavigate  } from "react-router-dom"
import Navigationbar from "../components/Navigationbar";
import ErrorEl from "../components/ErrorEl";

export default () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [responseStatus, setResponseStatus] = useState<number>(0)
    const [errorField, setErrorField] = useState<string>("")
    const checkInfo = async () => {
        if (username == '' || password == '') {
            setErrorField("You need to fill out all the fields")
        } else {
            try{
                const body = `{\"username\":\"${username}\", \"passwordhash\":\"${password}\"}`
    
                console.log(body);
                fetch("http://localhost:7175/api/login", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.parse(JSON.stringify(body))
                }).then((response) => {
                    console.log("res status: ", response.status);
                    setResponseStatus(response.status);
                    return response.json();
                }).then((data) => {
                    if (data.error) { 
                        console.log("Here is the setResponse", responseStatus)
                        setErrorField(data.error)
                        console.log("something is wrong if this is not undefined", data.message)
                    } else {
                        console.log(data)
                        localStorage.setItem("logged-in", "true");
                        localStorage.setItem("username", data.username);
                        localStorage.setItem("admin", data.admin);
                        localStorage.setItem("user_id", data.user_id)
                        navigate("/");
                    };
                });
            } catch(error){
                console.error("error" + error)
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