import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="border-b-2 py-3 flex justify-between">
            <div className="text-3xl"><Link to={"/admin"}>Redaktor</Link></div>
            <div className="flex ">
                <div className="border m-1 p-2"><Link to={"/admin/new"}>Jana Därιs</Link></div>
                <div className="border m-1 p-2"><Link to={"/admin/test"}>Jana Testter</Link> </div>
            </div>
        </div> 
    )
}