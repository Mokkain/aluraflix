import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import NewVideo from "./Pages/NewVideo"
import NotFound from "./Pages/NotFound"
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function AppRoutes() {

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/new-video" element={<NewVideo />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>

    );
}

export default AppRoutes;