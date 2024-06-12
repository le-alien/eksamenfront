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

            // Check if the response status is OK (200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Ensure the response is valid JSON
            const data: any = await response.json().catch(() => {
                throw new Error("Invalid JSON response");
            });


            if (data.error) {
                setErrorField(data.error);
                if (data.message) {
                }
            } else {
                if (Array.isArray(data.users)) { // Ensure data.Users is an array
                    setUserArr(data.users); // Set userArr with data.Users
                } else {
                    console.error("Expected an array but got:", data.users);
                    setErrorField("Invalid data format received from server.");
                }
            }
        } catch (error) {
        }
    };

    const changeAdmin = async (username: string, admin: boolean) => {
        try {
            let isAdminChangeValue = !admin;
            const response = await fetch(`http://localhost:5000/api/UserController/Update${username}/${isAdminChangeValue}`, {
                method: "GET",
                mode: "cors",
            });

            // Check if the response status is OK (200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Ensure the response is valid JSON
            const data = await response.json().catch(() => {
                throw new Error("Invalid JSON response");
            });

            if (data.error) {
            } else {
                setIsAdmin(!isAdmin);
                setTimeout(() => {}, 1000);
            }
        } catch (error) {
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
