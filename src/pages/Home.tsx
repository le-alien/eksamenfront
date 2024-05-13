import { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.tsx"
import "../index.css"

export default () => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        console.log("Viktor er gay")
    },[count])
    return (
        <div className="bg-lightBlueMountain h-screen">
            <Navigationbar />

            <button onClick={() => setCount(count + 1)}>
                INCREMENT
            </button>

            <p>{count}</p>
        </div>
    )
}