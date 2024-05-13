
import { ReactNode, useEffect, useState } from "react";
import "../index.css"

export default () => {
    const [userData, setUserData] = useState<Response | ReactNode>()
    const apiFetch = async () => {
        try {
            const response = await fetch("http://ip//getAllUsers");
            const data = await response;
            setUserData(data)
            console.log(data);
        } catch(error) {
            console.error("error" + error)
        }
    }

    useEffect(() => {
        apiFetch();
    },[])

    return (
        <div>
            <div>
                {userData as ReactNode}
            </div>
        </div>
    )
}