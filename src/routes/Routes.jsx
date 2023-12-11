import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import Login from "../pages/Login";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Home/>,
              },
            {
                path: "/products",
                element: <ProductsPage/>,
              },
            {
                path: "/login",
                element: <Login/>,
              },
           
        ]
    }
  ]);

export default router