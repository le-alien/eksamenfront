import { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar"
import ThreadModal from "../components/ThreadModal";
import MovableDiv from "../components/MovableDiv";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorEl from "../components/ErrorEl";
import Headerxl from "../components/Headerxl";


const GeneralBoard: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname.slice(1);

    const [threadArr, setThreadArr] = useState<Array<any>>([]);
    const [errorField, setErrorField] = useState<string>("");

    const getThreads = async () => {
        try {
            fetch(`http://localhost:7175/api/getThreadsBoardId/${currentPath}`, {
                method: "GET",
                mode: "cors",
            }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data.error) {
                    console.error("there was an error from the server: ", data.error);
                    setErrorField(data.error);
                } else {
                    console.log(data)
                    data.forEach((obj: Array<any>)=>{
                        setThreadArr((prevThread: any) => [
                            ...prevThread,
                            {
                                obj
                            }
                        ])
                    });
                    data.forEach((element: any) => {
                        console.log(element)
                    });
                }
            });

        } catch (error) {
            console.error("error: ", error);
        }
    }
    const [isThreadModalOpen, setIsThreadModalOpen] = useState<boolean>(false);

    useEffect(() => {
        getThreads();
    },[])

    return (
        <div className="bg-slate-400 h-fit w-screen">
            <Navigationbar></Navigationbar>
            <div className="flex justify-center w-screen">  
                <div className="flex bg-slate-200 mt-10 h-32 w-3/5 justify-center">
                    <div className="flex flex-col">
                        <span className="text-4xl">Welcome to {location.pathname.slice(1)}</span>
                        <span>Feel free to contribute or make a new thread!</span>
                    </div>
                    <div className="mt-auto">
                        <button className="bg-lightGrayMountain rounded-md h-10 hover:bg-mediumGrayMountain text-cloudWhite" onClick={() => {setIsThreadModalOpen( !isThreadModalOpen )}}>Create New!</button>
                    </div>
                </div>
            </div>                
            <ThreadModal isOpen={isThreadModalOpen}></ThreadModal>
            <div className="flex items-center flex-col w-screen">
                {threadArr.map((thread, index) =>(
                    <div key={index} className="my-8 w-3/5 h-fit p-2 hover:bg-darkBlueMountain bg-lightBlueMountain rounded-md hover:cursor-pointer"
                    onClick={() => {navigate(`/threads/${thread.obj.thread_id}`)}}>
                        <div className="ml-2">
                            <div className="flex flex-col mb-2">
                                <div className="flex flex-row">
                                    <Headerxl>{thread.obj.header}</Headerxl>
                                    <span className="ml-2">by: {thread.obj.username}</span>
                                </div>
                                <span>{thread.obj.user_timestamp}</span>
                            </div>

                            <div className="flex flex-col mb-2">
                                <span>{thread.obj.content}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <ErrorEl val={errorField}></ErrorEl>
            </div>
            {/*<MovableDiv></MovableDiv>*/}
        </div>
    )
}

export default GeneralBoard;