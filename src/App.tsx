import { Route, Routes } from "react-router-dom";
import { AppBar } from "./Components/AppBar";
import { AboutUs } from "./Pages/AboutUs";
import { Landing } from "./Pages/Landing";
import { Pricing } from "./Pages/Pricing";


export const App = () => {
  return (
    <div >
      <AppBar />
      <Routes>
        <Route path="*" element={<Landing/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
    </div>
  )
}