import { createBrowserRouter} from "react-router-dom";
import App from './App';
import axios from "axios";
import Admin from "./views/admin/admin";
import New from "./views/admin/new";
import Index from "./views/index";
import Read from "./views/read";

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
                path: "/lecture/:title",
                element: <Read/>,
                loader: async({params})=> {
                    return axios.get(`http://localhost:4000/api/v1/get/lecture/${params.title}`);
                }
            }
        ]
    }, 
    {
        element: <Admin/>,
        path: "/admin",
        children: [
            {
                element: <New/>,
                path: "new",
            }
        ],
    }, 
]);