import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headerxl from "../components/Headerxl";


const Thread: React.FC = () => {
    const { id } = useParams<{id: string }>();
    const [thread, setThread] = useState<any>();
    
    
    const fetchThread = async () => {
        try {
            fetch(`http://localhost:5000/api/GetPost/${id}`, {
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
        <div className="bg-neutral-700 h-screen">
            <span>The page is displaying at least</span>
            <div className="w-screen">
               
            </div>
        </div>
    )
}

export default Thread;