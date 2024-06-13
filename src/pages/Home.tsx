import { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.tsx"
import "../index.css"
import Headerxl from "../components/Headerxl.tsx";

export default () => {
    const [count] = useState<number>(0);
    useEffect(() => {
    },[count])
    return (
    <div className="bg-neutral-700 h-screen">
            <Navigationbar />
            <div className="justify-center flex">
                <span className="font-roboto font-bold text-5xl">
                    Episk
                </span>
                <span className="font-roboto text-5xl">
                    Forum
                </span>
            </div>
            <div className="flex justify-center">
                <div className="w-2/3">
                    <div className="bg-neutral-900 border-solid border-2 border-zinc-800 my-2 py-0.5 rounded-full">
                        <div className="flex mx-2 content-center rounded-full">    
                            <Headerxl>
                                Trending Forum boards
                            </Headerxl>
                        </div>
                    </div>
                    <div className="bg-neutral-800 border-cloudWhite flex-row items-start rounded-lg my-3">
                        <a href="/GeneralBoard" className="flex">
                            <span className="content-center">
                                <img className="w-14 h-4/5 mt-1 ml-1" src="src\assets\diagram.png" alt="" />
                            </span>
                            <div className="flex flex-col mx-2">
                                <Headerxl>
                                    General Discussion
                                </Headerxl>
                                <span>
                                    This board is for all and any discussion
                                </span>
                           </div>
                        </a>
                    </div>
                    <div className="flex bg-neutral-800 border-cloudWhite flex-row items-start rounded-lg my-3">
                        <a href="/CurrentBoard" className="flex">
                            <span className="content-center">
                                <img className="w-14 h-4/5 mt-1 ml-1" src="src\assets\diagram.png" alt="" />
                            </span>
                            <div className="flex flex-col mx-2">
                                <Headerxl>
                                    Current Discussion
                                </Headerxl>
                                <span>
                                    This board is for discussion of current topics
                                </span>
                           </div>
                        </a>
                    </div>
                    <div className="flex bg-neutral-800 border-cloudWhite flex-row items-start rounded-lg my-3">
                        <a href="/CurrentBoard" className="flex">
                            <span className="content-center">
                                <img className="w-14 h-4/5 mt-1 ml-1" src="src\assets\diagram.png" alt="" />
                            </span>
                            <div className="flex flex-col mx-2">
                                <Headerxl>
                                    Music Discussion
                                </Headerxl>
                                <span>
                                    This board is for discussion of music
                                </span>
                           </div>
                        </a>
                    </div>
                    <div className="bg-neutral-800 border-cloudWhite flex-row items-start rounded-lg my-3">
                        <a href="/CurrentBoard" className="flex">
                            <span className="content-center">
                                <img className="w-14 h-4/5 mt-1 ml-1 " src="src\assets\diagram.png" alt="" />
                            </span>
                            <div className="flex flex-col mx-2 ">
                                <Headerxl>
                                    Dwarf Fortress Discussion
                                </Headerxl>
                                <span>
                                    This board is for discussion of Dwarf Fortress
                                </span>
                           </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}