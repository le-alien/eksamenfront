import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../index.css";

export const Navigationbar: React.FC = () => {
    const navigate = useNavigate;
    return (
        <div className="h-13 bg-darkBlueMountain flex items-center flex-row">
            <div className="text-3xl ml-4 flex-row">
                <Link to="/" className="flex">
                    <span className="font-roboto font-bold">
                        Something
                    </span>
                    <span className="font-roboto">
                        Forum
                   </span>
                </Link>
                <Link to="/login" className="flex">
                    <span>
                        Admin
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Navigationbar;