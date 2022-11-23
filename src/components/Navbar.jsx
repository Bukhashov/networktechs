import { useLocation, Link } from "react-router-dom";

export default function Navbar(){
    let location = useLocation();

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
            <div className="auth flex items-center">
                <div className="auth_item">Kιru</div>
                <div className="w-0.5 h-5 bg-gray-300 rounded-md mx-2"></div>
                <div className="auth_item">Tιrkelιu</div>
            </div>
        </nav>
    );
}