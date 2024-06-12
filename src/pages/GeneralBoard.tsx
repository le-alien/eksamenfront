import { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar";
import ThreadModal from "../components/ThreadModal";
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
            const response = await fetch(`http://localhost:5000/api/UserController/GetPost`, {
                method: "GET",
                mode: "cors",
            });
            const data = await response.json();
            console.log("Server response:", data); // Log the entire response for debugging

            if (data.error) {
                console.error("There was an error from the server: ", data.error);
                setErrorField(data.error);
            } else {
                if (Array.isArray(data.posts)) {
                    setThreadArr(data.posts);
                } else {
                    console.error("Expected an array but got:", data.posts);
                }
            }
        } catch (error) {
            console.error("Error: ", error);
            setErrorField("An error occurred while fetching threads.");
        }
    };

    const [isThreadModalOpen, setIsThreadModalOpen] = useState<boolean>(false);

    useEffect(() => {
        getThreads();
    }, []);

    return (
        <div className="bg-neutral-700">
            <Navigationbar />
            <div className="flex justify-center">
                <div className="flex bg-stone-800 mt-10 h-32 w-3/5 justify-center rounded-xl">
                    <div className="flex flex-col">
                        <span className="text-4xl">Welcome to {currentPath}</span>
                        <span>Feel free to contribute or make a new thread!</span>
                    </div>
                    <div className="mt-auto">
                        <button
                            className="bg-zinc-700 rounded-md h-10 hover:bg-mediumGrayMountain text-cloudWhite"
                            onClick={() => setIsThreadModalOpen(!isThreadModalOpen)}
                        >
                            Create New!
                        </button>
                    </div>
                </div>
            </div>
            <ThreadModal isOpen={isThreadModalOpen} />
            <div className="flex items-center flex-col w-screen">
                {threadArr.length > 0 ? (
                    threadArr.map((thread, index) => (
                        <div
                            key={index}
                            className="bg-stone-800 my-8 w-3/5 h-fit p-2 hover:bg-darkBlueMountain bg-lightBlueMountain rounded-md hover:cursor-pointer"
                            onClick={() => navigate(`/threads/${thread.thread_id}`)}
                        >
                            <div className="ml-2" >
                                <div className="flex flex-col mb-2">
                                    <div className="">
                                        <Headerxl>{thread.title}</Headerxl>
                                        <span className="ml-2 text-xs">by: {thread.author}</span>
                                    </div>
                                    <span>{thread.user_timestamp}</span>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <span>{thread.content}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <span>No threads available.</span>
                )}
            </div>
            {errorField && <ErrorEl val={errorField} />}
        </div>
    );
};

export default GeneralBoard;
