import { createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import App from './App';
import Admin from "./views/admin/admin";
import New from "./views/admin/new";

export const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index path="/" element={<App />} >
            
            </Route>
            <Route path="admin" element={<Admin/>} >
                <Route path="new" element={<New/>}></Route>
            </Route>
        </Route>
    )
);