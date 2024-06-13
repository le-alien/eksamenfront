
import {  useEffect, useState } from "react";
import "../index.css"
import ErrorEl from "./ErrorEl";
import Headerxl from "./Headerxl";




const ThreadList: React.FC = () => {
    const [userArr] = useState<Array<any>>([])
    const [errorField] = useState<string>("");



    

    const changeAdmin = async (username: string, admin: boolean) => {
        try {
            let isAdminChangeValue = !admin
            console.log("username of requesting admin change: ", username)
            fetch(`http://localhost:7175/api/makeAdminUsername/${username}/${isAdminChangeValue}`, {
                method: "GET",
                mode: "cors",
            }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data.error) {
                    console.log("something went wrong: ", data.error)
                } else {
                
                }
            })
        } catch (error) {
            console.error("error: ", error)
        }
    }
    
    useEffect(() => {
        // load threads on page load
    },[])   

    return (
        <div className="bg-slate-400">
            <div className="flex items-center flex-col w-screen">
                {userArr.map((user, index) =>(
                    <div key={index} className="my-8 w-3/5 h-fit p-2 bg-lightBlueMountain rounded-md">
                        <div className="ml-2">
                            <div className="flex flex-col mb-2">
                                <Headerxl>{user.obj.Header}</Headerxl>
                                <span>created: {user.obj.user_timestamp}</span>
                            </div>

                            <div className="flex flex-col mb-2">
                                <span>id: {user.obj.user_id}</span>
                                <span>email: {user.obj.email}</span>
                            </div>
                            <div className="flex">
                                <button className="bg-cloudWhite rounded-md self-end hover:bg-slate-200" onClick={() => changeAdmin(user.obj.username, user.obj.admin)}>change</button>
                                <span className="ml-2">admin: {user.obj.admin.toString()}</span>
                            </div>
                            <div className="flex">
                                <button className="bg-cloudWhite rounded-md self-end hover:bg-slate-200">change</button>
                                <span className="ml-2">banned: {user.obj.banned.toString()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <ErrorEl val={errorField}></ErrorEl>
            </div>
        </div>
        
    )
}

export default ThreadList;