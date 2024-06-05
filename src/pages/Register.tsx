import { useState } from "react"
import "../index.css"
import { useNavigate  } from "react-router-dom"
import Navigationbar from "../components/Navigationbar";
import ErrorEl from "../components/ErrorEl";

export default () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [passwordhash, setPassword] = useState<string>("");

    const [errorField, setErrorField] = useState<string>("");
    const [responseStatus, setResponseStatus] = useState<number>(0);

    // Rust is so mean so this is to make it work
    const user_timestamp = "2024-05-10T09:22:08Z";
    const admin = false;
    const banned = false

    const pingServer = async () => {
        const response = await fetch("http://127.0.0.1:7175/test/ping-server");
        console.log(response);
    }

    const checkInfo = async () => {
        pingServer();
        if (username == '' || passwordhash == '' || email == '') {
            setErrorField("You need to fill out all the fields");
        } else {
            try{
                let date = new Date();
                console.log("username: " + username, "email: " + email, "password: " + passwordhash);
                const body = `{\"username\":\"${username}\", \"email\":\"${email}\", \"passwordhash\":\"${passwordhash}\", \"user_timestamp\":\"${date}\", \"admin\":${admin}, \"banned\":${banned}}`
    
                console.log(body);
                fetch("http://localhost:7175/api/register", {
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
        <div className="flex justify-center flex-col justify-items-center w-screen m-1 items-center">
            <h2 className="self-center">Register!</h2>
            <input className="my-2 w-20 self-center" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"></input>
            <input className="my-2 w-20 self-center" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
            <input className="my-2 w-20 self-center" value={passwordhash} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
            <button className="bg-lightGrayMountain w-14 text-cloudWhite rounded-md" onClick={checkInfo}>send</button>
        </div>
        <div className="flex w-screen justify-center my-10">
        <ErrorEl val={`${errorField}`}></ErrorEl>
        </div>
    </div>
    )
}