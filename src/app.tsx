import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { Navbar } from "./components/navbar/navbar";
import { CountryDetail } from "./components/detail/country-detail";
import { ThemeProvider } from "./context/theme-provider";


export function App(){
 
  return(
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   <Navbar />
    <Routes> 
   <Route path="/" element={<Home/>} />
   <Route path="/country/:name" element={<CountryDetail/>}/>
   </Routes>
   </ThemeProvider>
    </>

  )
}