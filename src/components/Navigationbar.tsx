import React from "react";
import { Link } from 'react-router-dom';
import "../index.css";

export const Navigationbar: React.FC = () => {
    return (
        <div className="h-13 bg-darkBlueMountain flex items-center">
            <div className="text-3xl ml-4">
                <Link to="/" className="flex">
                    <span className="font-roboto font-bold">
                        Something
                    </span>
                    <span className="font-roboto">
                        Forum
                   </span>
                </Link>
            </div>
        </div>
    );
}

export default Navigationbar;