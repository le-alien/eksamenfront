import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorEl from "./ErrorEl";

interface Props {
    isOpen: boolean;
}

const ThreadModal: React.FC<Props> = ({isOpen}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const boardPath = location.pathname.slice(1);

    const [pos, setPos] = useState({ x: -500, y: -250 });
    const [dragging, setDragging] = useState(false);
    
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
    };
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging) return;
        setPos({
            x: pos.x + e.movementX,
            y: pos.y + e.movementY,
        });
    };
    
    const handleMouseUp = () => {
        setDragging(false);
    };

    const [title, setTitle] = useState<string>("New Thread");
    const [content, setContent] = useState<string>("What is the thread about");
    const [errorField, setErrorField] = useState<string>("");
    
    const createThread = async () => {
        try {
            console.log("trying to make thread");
            const body = {
                Title: title,
                Content: content,
                Author: localStorage.getItem("username"),
                Likes: 0
            };

            const response = await fetch("http://localhost:5000/api/UserController/CreatePost", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            });

            const data = await response.json();
            
            if (response.ok) {
                navigate(`/thread/${data.title}`);
            } else {
                setErrorField(`There was an issue: ${data.error || data.title}`);
            }
        } catch (error) {
            console.error("error: ", error);
            setErrorField("An unexpected error occurred");
        }
    }

    return (
        <div>
            { isOpen && (
                <div className="absolute inset-1/2 flex justify-center items-center h-3/5 w-80 flex-col bg-neutral-600"
                style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
                onMouseDown={handleMouseDown} 
                onMouseMove={handleMouseMove} 
                onMouseUp={handleMouseUp}>
                
                    <div className="bg-stone-600 top-0 absolute cursor-move w-full flex justify-center cursor-grab">
                        <span className="text-cloudWhite">Create a new thread</span>
                    </div>
                    <div className="flex flex-col top-0">
                        <span></span>
                        <input className="mb-2 rounded-mb mb-slate-100 text-black" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" onMouseDown={(e) => e.stopPropagation()}/>
                        <input className="text-black"type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" onMouseDown={(e) => e.stopPropagation()}/>
                    </div>
                    <div className="mt-2">
                        <button className="bg-lightGrayMountain text-cloudWhite w-14 h-8 rounded-md hover:bg-mediumGrayMountain" onClick={() => {createThread()}}>create!</button>
                    </div>
                    <ErrorEl val={errorField}></ErrorEl>
                </div>
            )}
        </div>
    )
}

export default ThreadModal;
