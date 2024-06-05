import { Navigate } from "react-router-dom";

const AdminRoute: React.FC<any> = ({ children }) => {
    const isLoggedin = localStorage.getItem("logged-in");
    setTimeout(() => {}, 10000);
    return isLoggedin ? children : <Navigate to="/login" replace />  ;
}

export default AdminRoute