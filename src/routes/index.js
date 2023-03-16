import axios from "axios";
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import AllMovies from "../components/all movie/allMovie";
import Contact from "../components/contact/contact";
import ReviewMovie from "../components/pages/reviewMovie";
  
export  const router = createBrowserRouter([
    { 
      path: "/reviewMovie/:id", 
      element: <ReviewMovie />,
      loader:async ({ params }) => {  
         const dataRe = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=1cf50e6248dc270629e802686245c2c8`);        
          
          return dataRe.data;
          
        },
        
      

    },
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/allMovies",
      element: <AllMovies/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }
    
  ]);