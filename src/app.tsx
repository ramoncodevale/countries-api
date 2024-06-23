import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { Navbar } from "./components/navbar/navbar";


export function App(){
 
  return(
    <div className="bg-very-dark-light dark:bg-very-dark-background">
   <Navbar />
    <Routes> 
   <Route path="/" element={<Home/>} />
   </Routes>
    </div>

  )
}