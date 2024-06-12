import { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.tsx"
import Userlist from "../components/Userlist.tsx"
import "../index.css"

export default () => {
    return (
        <div className="bg-neutral-700 h-screen">
            <Navigationbar></Navigationbar>
            <Userlist></Userlist>
        </div>
    )
}