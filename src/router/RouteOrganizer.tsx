import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/home";
import { DefaultLayout } from "../layout";

const RouteOrganizer = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<LandingPage />} />
            </Route>
        </Routes>
    );
};

export default RouteOrganizer;
