import { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.tsx"
import Userlist from "../components/Userlist.tsx"
import "../index.css"

export default () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Userlist></Userlist>
        </div>
    )
}