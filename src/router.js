import { createBrowserRouter, redirect} from "react-router-dom";
import App from './App';
import axios from "axios";
import Admin from "./views/admin/admin";
import New from "./views/admin/new";
import Index from "./views/index";
import Read from "./views/read";
import Exam from "./views/exam";
import Certificate from './views/certificate';
import NewTest from "./views/admin/newTest";
import Tests from './views/test';
import Signin from "./views/signin";
import Signup from "./views/signup";
import Ball from "./views/ball";
import Media from "./views/media";
//говард хьюз

export const Router = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        children: [
            {
                path: "/",
                element: <Index/>,
                loader: async ()=> {
                    return axios.get("http://localhost:4000/api/v1/all/lecture")
                }
            },
            {
                path: "exam",
                element: <Exam/>,
                loader: async() => {
                    if(sessionStorage.getItem('jwt')){
                        return axios.get(`http://localhost:4000/api/v1/get/test/exam`);
                    }else{
                        return redirect('/singin');
                    }
                    
                },

            },
            {
                path: "ball/:title",
                element: <Ball/>,
                loader: async ({params}) => {
                    if(params.title == "exam") {
                        if(!sessionStorage.getItem('jwt') || !sessionStorage.getItem('numberQuestion')){
                            return redirect("/exam");
                        }
                    }else if(!sessionStorage.getItem('numberQuestion')){
                        return redirect("/");
                    }
                    
                }

            },
            {
                path: "certificate",
                element: <Certificate/>
            },
            {
                path: "/lecture/:title",
                element: <Read/>,
                loader: async({params}) => {
                    return axios.get(`http://localhost:4000/api/v1/get/lecture/${params.title}`);
                }
            },
            {
                path: "/test/:lecture",
                element: <Tests/>,
                loader: async({params}) => {
                    return axios.get(`http://localhost:4000/api/v1/get/test/${params.lecture}`);
                },
            }
        ]
    },
    {
        path: "/media",
        element: <Media/>,
        loader: async ()=> {
            return axios.get("http://localhost:4000/api/v1/getall/media")
        }
    },
    {
        path: "/singin",
        element: <Signin/>,
        loader: async ()=> {
            if(sessionStorage.getItem('jwt')){
                return redirect("/");
            }
        }
    },
    {
        path: "/singup",
        element: <Signup/>,
        loader: async ()=> {
            if(sessionStorage.getItem('jwt')){
                return redirect("/");
            }
        }
    },
    {
        element: <Admin/>,
        path: "/admin",
        children: [
            {
                path: "new",
                element: <New/>,
            },{
                path: "test",
                element: <NewTest/>,
                loader: async ()=>{
                    return axios.get("http://localhost:4000/api/v1/all/lecture")
                }
            }
        ],
    }, 
]);