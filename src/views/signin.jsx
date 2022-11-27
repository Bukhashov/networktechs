import {useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
//top-[50%] left-[50%] m-t-[-50px] m-l-[50px]

export default function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const passwordOnChange = async (event)=> {
        setPassword(event.target.value);
    }
    const emailOnChange = async (event)=> {
        setEmail(event.target.value);
    }

    const login = async () =>{
        axios.post("http://localhost:4000/api/v1/user/signin", {
            email: email,
            password: password
        }).then(function (response) {
            sessionStorage.setItem('jwt', response.data.token);
            sessionStorage.setItem('uid', response.data.uid);
            sessionStorage.setItem('lastname', response.data.lastname);
            sessionStorage.setItem('firstname', response.data.firstname);

            return navigate("/");
        }).catch(function (error) {
            console.log(error);
        });
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
                <div className='p-1 flex items-center justify-center'>
                    <button onClick={login} className='p-[2px]'>Kiru</button>
                </div>
            </div>
        </div>
    )
}