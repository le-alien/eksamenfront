import { ComponentType, ReactNode } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";

interface Props {
    path: string;
    element: ReactNode;
}

const AdminRoute: React.FC<any> = ({ children }) => {
    const isAdmin = localStorage.getItem("admin");
    console.log("ER denne null dreper jeg noen", isAdmin);
    setTimeout(() => {}, 10000);
    return isAdmin ? children : <Navigate to="/login" replace />  ;
}

export default AdminRoute