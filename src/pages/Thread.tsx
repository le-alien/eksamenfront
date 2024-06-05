import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headerxl from "../components/Headerxl";


const Thread: React.FC = () => {
    const { id } = useParams<{id: string }>();
    const [thread, setThread] = useState<any>();
    
    
    const fetchThread = async () => {
        try {
            fetch(`http://localhost:7175/api/getThreadId/${id}`, {
                method: "GET",
                mode: "cors",
            }).then((response) => {
                console.log("this is response: ", response)
                return response.json();
            }).then((data) => {
                if (data.error) {
                    console.error("There was an issue on the server: ", data.error);
                } else {
                    console.log("this is data: ", data);
                    setThread(data);
                    console.log(thread)
                }
            })
        } catch (error) {
            console.log("error: ", error);
        } finally {
            console.log("THIS IS A OPARATION THAT MIGHT BE USEFULL");
        }
    }
    
    console.log("this is thread: ", thread);
    
    useEffect(() => {
        fetchThread();
    },[])

    return(
        <div>
            <span>The page is displaying at least</span>
            <div className="w-screen">
                {/*
                    <div className="my-8 w-3/5 h-fit p-2 hover:bg-darkBlueMountain bg-lightBlueMountain rounded-md hover:cursor-pointer">
                        <div className="ml-2">
                            <div className="flex flex-col mb-2">
                                <div className="flex flex-row">
                                    <Headerxl>{thread.data.header}</Headerxl>
                                    <span className="ml-2">by: {thread.username}</span>
                                </div>
                                <span>{thread.user_timestamp}</span>
                            </div>  
                            <div className="flex flex-col mb-2">
                                <span>{thread.content}</span>
                            </div>
                        </div>
                    </div>
                */}
            </div>
        </div>
    )
}

export default Thread;