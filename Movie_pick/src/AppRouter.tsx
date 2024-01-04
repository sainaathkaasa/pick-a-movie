import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import  Moviepagemain  from "./Components/Moviepagemain";
import { SearchedItemdisplay } from "./Components/SearchedItemdisplay";
import { ErrorDisplay } from "./Components/ErrorDisplay";
import { Movieinfo } from "./Components/Movieinfo";
import { Howareyoutoday } from "./Components/Howareyoutoday";
import Actormovies from "./Components/Actormovies";
import { Blog } from "./Components/Blog";
import Loginpage from "./Components/loginpage";

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Loginpage/>
            },
            {
                path:'/mainpage',
                element:<Moviepagemain/>
            },
            {
                path:'/searchedResult',
                element:<SearchedItemdisplay/>
            },
            {
                path:'/error',
                element: <ErrorDisplay/>
            },
            {
                path:'/movieinfo',
                element:<Movieinfo/>
            },
            {
                path:'/howareyou',
                element:<Howareyoutoday/>
            },
            {
                path:'/Actormovies',
                element:<Actormovies/>
            },
            {
                path:'/blog',
                element:<Blog/>
            }
        ]
    }
])

export default AppRouter