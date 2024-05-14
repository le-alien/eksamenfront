import { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.tsx"
import "../index.css"
import Headerxl from "../components/Headerxl.tsx";

export default () => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        console.log("Viktor er gay")
    },[count])
    return (
        <div className="bg-lightBlueMountain h-screen">
            <Navigationbar />
            <div className="justify-center flex">
                <span className="font-roboto font-bold text-5xl">
                    Something
                </span>
                <span className="font-roboto text-5xl">
                    Forum
                </span>
            </div>
            <div className="bg-cloudWhite">
                <Headerxl>
                    SomethingForum boards
                </Headerxl>
            </div>


            <button onClick={() => setCount(count + 1)}>
                INCREMENT
            </button>

            <p>{count}</p>
        </div>
    )
}