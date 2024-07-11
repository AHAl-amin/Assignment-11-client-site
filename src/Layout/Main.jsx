import { Outlet } from "react-router-dom";
import Nabver from "../componants/Nabver";
import Footer from "../componants/Footer";




const Main = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Nabver></Nabver>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;