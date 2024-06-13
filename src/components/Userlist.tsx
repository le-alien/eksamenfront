import { useEffect, useState } from "react";
import "../index.css";
import ErrorEl from "./ErrorEl";
import Headerxl from "./Headerxl";

interface UserData {
    username: string;
    admin: boolean;
}

export default () => {
    const [userArr, setUserArr] = useState<UserData[]>([]);
    const [errorField, setErrorField] = useState<string>("");
    const [isAdmin, setIsAdmin] = useState<boolean>();

    const apiFetch = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/UserController/GetUser", {
                method: "GET",
                mode: "cors",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: any = await response.json().catch(() => {
                throw new Error("Invalid JSON response");
            }) as any;

            if (data.error) {
                setErrorField(data.error);
            } else {
                if (Array.isArray(data.users)) {
                    setUserArr(data.users);
                } else {
                    console.error("Expected an array but got:", data.users);
                    setErrorField("Invalid data format received from server.");
                }
            }
        }  catch (error) {
            if (error instanceof Error) {
                setErrorField(error.message);
            }
            else {
                throw error;
            }
        }
    };

    const changeAdmin = async (username: string, admin: boolean) => {
        try {
            const response = await fetch("http://localhost:5000/api/UserController/Update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Username: username,
                    Password: "",
                    Admin: !admin,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json().catch(() => {
                throw new Error("Invalid JSON response");
            });

            if (data.error) {
                setErrorField(data.message);
            } else {
                setIsAdmin(!admin);
                apiFetch();
            }
        } catch (error) {
            if (error instanceof Error) {
                setErrorField(error.message);
            }
            else {
                throw error;
            }
        }
    };

    useEffect(() => {
        apiFetch();
    }, []);

    useEffect(() => {
        apiFetch();
    }, [isAdmin]);

    return (
        <div className="bg-neutral-700">
            <div className="flex items-center flex-col w-screen">
                {userArr.map((user, index) => (
                    <div key={index} className="my-8 w-3/5 h-fit p-2 bg-stone-900 rounded-md">
                        <div className="ml-2">
                            <div className="flex flex-col mb-2">
                                <Headerxl>{user.username}</Headerxl>
                            </div>
                            <div className="flex">
                                <button className="bg-lightGrayMountain rounded-md self-end hover:bg-stone-800" onClick={() => changeAdmin(user.username, user.admin)}>change</button>
                                <span className="ml-2">admin: {user.admin.toString()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <ErrorEl val={errorField}></ErrorEl>
            </div>
        </div>
    );
};
