import { useLocation, Link, useNavigate } from "react-router-dom";

export default function Navbar(){
    let location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    let controlLastname = false;
    let lastname = "";
    let firstname = "";
    if(sessionStorage.getItem('lastname')) {
        controlLastname = true;
        lastname = sessionStorage.getItem('lastname');
        firstname = sessionStorage.getItem('firstname');
    }
    const logout = async () => {
        sessionStorage.removeItem("lastname");
        sessionStorage.removeItem("firstname");
        sessionStorage.removeItem("uid");
        sessionStorage.removeItem("jwt");
        return navigate("/");
    }

    return(
        <nav className="flex justify-between py-3">
            <div className="logo flex items-center text-xl">
                <img className="w-9 h-9" src="/images/logo.png" alt="" />
                <Link to={"/"}>NET</Link>
            </div>
            <div className="menu flex items-center">
                <div className="menu_item mx-2"><Link to={"/"}>Därιster</Link></div>
                <div className="menu_item mx-2"><Link to={"/exam"}>Emtihan</Link></div>
                <div className="menu_item mx-2"><Link to={"/certificate"}>Sertifikat</Link></div>
                
            </div>
            <div className={controlLastname ? "hidden auth flex items-center" : "block auth flex items-center"}>
                <div className="auth_item"><Link to={"/singin"}>Kιru</Link></div>
                <div className="w-0.5 h-5 bg-gray-300 rounded-md mx-2"></div>
                <div className="auth_item"><Link to={"/singup"}>Tιrkelιu</Link></div>
            </div>
            <div className={controlLastname ? "block auth flex items-center" : "hidden auth flex items-center"}>
                <div className="auth_item">{lastname} {firstname}</div>
                <div className="w-0.5 h-5 bg-gray-300 rounded-md mx-2"></div>
                <div className="auth_item"><button onClick={logout}>Shygu</button></div>
            </div>
        </nav>
    );
}