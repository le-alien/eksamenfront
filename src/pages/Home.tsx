import React, { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.tsx"
import "../index.css"
import Headerxl from "../components/Headerxl.tsx";

export default () => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        console.log("Viktor er gay")
    },[count])
    return (
    <div className="bg-slate-900 h-screen">
            <Navigationbar />
            <div className="justify-center flex">
                <span className="font-roboto font-bold text-5xl">
                    Something
                </span>
                <span className="font-roboto text-5xl">
                    Forum
                </span>
            </div>
            <div className="flex justify-center">
                <div className="w-2/3">
                    <div className="bg-lightBrownMountain border-solid border-2 border-cloudWhite my-2 py-0.5">
                        <div className="flex mx-2 content-center">    
                            <Headerxl>
                                SomethingForum boards
                            </Headerxl>
                        </div>
                    </div>
                    <div className="flex bg-lightBrownMountain border-cloudWhite flex-row items-start">
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
                    <div className="flex bg-lightBrownMountain border-cloudWhite flex-row items-start">
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
                    <div className="flex bg-lightBrownMountain border-cloudWhite flex-row items-start">
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
                    <div className="flex bg-lightBrownMountain border-cloudWhite flex-row items-start">
                        <a href="/CurrentBoard" className="flex">
                            <span className="content-center">
                                <img className="w-14 h-4/5 mt-1 ml-1" src="src\assets\diagram.png" alt="" />
                            </span>
                            <div className="flex flex-col mx-2">
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


            <button onClick={() => setCount(count + 1)}>
                INCREMENT
            </button>

            <p>{count}</p>
        </div>
    )
}