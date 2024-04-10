import { Route, Routes } from 'react-router-dom'
import { AppBar } from './Components/AppBar'
import { AboutUs } from './Pages/AboutUs'
import { Services } from './Pages/Services'
import { CTADialog } from './Components/CTADialog'

export const App = () => {
    return (
        <>
            <AppBar />
            <Routes>
                <Route path="*" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contactus" element={<CTADialog />} />
            </Routes>
        </>
    )
}
