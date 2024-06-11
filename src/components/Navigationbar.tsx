import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../index.css";



export const Navigationbar: React.FC = () => {
    const navigate = useNavigate();
    localStorage.setItem('loggedinn', "true")
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
            </div>
            <div className="flex flex-row justify-center">
                <Link to="/admin" className="flex mx-1">
                    <span>
                        Admin
                    </span>
                </Link>
                <Link to="/login" className="flex mx-1">
                    <span>
                        Login
                    </span>
                </Link>
                <Link to="/register" className="flex mx-1">
                    <span>
                        Register
                    </span>
                </Link>
                <Link to="/faq" className="flex mx-1">
                    <span>
                        FAQ
                    </span>
                </Link>
            </div>
            <div className="flex w-full justify-end mr-2">
            <span onClick={() => navigate("/user")} className={`text-xl self-end hover:cursor-pointer ${localStorage.getItem("admin") ? '' : 'hidden' }`}>{localStorage.getItem("username")}</span>
                    
            </div>
        </div>
    );
}

export default Navigationbar;