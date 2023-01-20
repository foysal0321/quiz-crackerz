import { createBrowserRouter } from "react-router-dom";
import Main from '../lyout/Main'
import Home from '../Components/Home/Home'
import Blog from '../Components/Blog/Blog'
import Statice from '../Components/Statitice/Statice'
import Question from "../Components/Qustion.js/Question";


 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<div className="display-5 text-center">Page not found 404!</div>,
        children:[
            {
                path:'/',
                element:<Home />,
                loader:() => fetch(`https://openapi.programming-hero.com/api/quiz`)
            },
            {
                path:'/home',
                element:<Home />,
                loader:() => fetch(`https://openapi.programming-hero.com/api/quiz`)
            },
            {
                path:'/:id',
                element:<Question />,
                loader:({params})=>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                }
            },
            {
                path:'/blog',
                element:<Blog />
            },
            {
                path:'/statice',
                element:<Statice />,
                loader:() => fetch(`https://openapi.programming-hero.com/api/quiz`)
            }
        ]
    }
])

export default router