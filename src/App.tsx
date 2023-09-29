import { Route, Routes } from "react-router-dom";
import { AppBar } from "./Components/AppBar";
import { AboutUs } from "./Pages/AboutUs";
import { Pricing } from "./Pages/Pricing";
import { CTADialog } from "./Components/CTADialog";


export const App = () => {
  return (
    <div >
      <AppBar />
      <Routes>
        <Route path="*" element={<AboutUs/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contactus" element={<CTADialog/>}/>
        </Routes>
    </div>
  )
}