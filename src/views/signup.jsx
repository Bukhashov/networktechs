import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const navigate = useNavigate();

    const passwordOnChange = async (event)=> {
        setPassword(event.target.value);
    }
    const emailOnChange = async (event)=> {
        setEmail(event.target.value);
    }
    const lastnameOnChange = async (event)=> {
        setLastname(event.target.value);
    }
    const firstnameOnChange = async (event)=> {
        setFirstname(event.target.value);
    }

    const singup = async () => {
        axios.post("http://localhost:4000/api/v1/user/signup", {
            email: email,
            password: password,
            lastname: lastname,
            firstname: firstname
        }).then(function (response){
            console.log(response)
            if(response.status === 200){
                return navigate("/singin");
            }
        })
    }

    return(
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div className='p-3 grid bg-slate-300'>
                <div className='p-1'>
                    <div>Email</div>
                    <div><input type="text" name="email" id="email" onChange={emailOnChange} /></div>
                </div>
                <div className='p-1'>
                    <div>Password</div>
                    <div><input type="text" name="password" id="password" onChange={passwordOnChange} /></div>
                </div>
                <div className='p-1'>
                    <div>Ati</div>
                    <div><input type="text" name="firstname" id="email" onChange={firstnameOnChange} /></div>
                </div>
                <div className='p-1'>
                    <div>Tegi</div>
                    <div><input type="text" name="lastname" id="password" onChange={lastnameOnChange} /></div>
                </div>

                <div className='p-1 flex items-center justify-center'>
                    <button onClick={singup} className='p-[2px]'>Kiru</button>
                </div>
            </div>
        </div>
    )
}