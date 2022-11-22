import { Outlet } from "react-router-dom";
import AdminNavBar from "../../components/admin/Navbar";

export default function Admin(){
    return(
        <div className="wrapper">
            <AdminNavBar/>
            <Outlet/>
        </div>        
    )
}