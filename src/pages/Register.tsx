import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Navigationbar from "../components/Navigationbar";
import ErrorEl from "../components/ErrorEl";

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [passwordhash, setPassword] = useState("");
    const [errorField, setErrorField] = useState("");

    const checkInfo = async () => {
        if (username === '' || passwordhash === '') {
            setErrorField("You need to fill out all the fields");
        } else {
            try {
                const body = {
                    "Username": username,
                    "Password": passwordhash,
                };

                const response = await fetch("http://localhost:5000/api/UserController/Register", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body)
                });

                const data = await response.json();
                if (data.error) {
                    setErrorField(data.error);
                } else {
                    console.log(data);
                    localStorage.setItem("logged-in", "true");
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("admin", data.admin);
                    localStorage.setItem("user_id", data.user_id);
                    navigate("/");
                }
            } catch (error) {
                console.error("error" + error);
            }
        }
    }
    return(
    
    <div>
        <Navigationbar></Navigationbar>
        <div className="flex justify-center flex-col justify-items-center w-screen m-1 items-center">
            <h2 className="self-center">Register!</h2>
            <input className="my-2 w-20 self-center" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"></input>
            <input className="my-2 w-20 self-center" value={passwordhash} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
            <button className="bg-lightGrayMountain w-14 text-cloudWhite rounded-md" onClick={checkInfo}>send</button>
        </div>
        <div className="flex w-screen justify-center my-10">
        <ErrorEl val={`${errorField}`}></ErrorEl>
        </div>
    </div>
    )
}