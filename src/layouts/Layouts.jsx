import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"

function Layouts() {
    return (

        <>
            <div className="lg:grid lg:grid-cols-[100px_1fr]">

                <Navigation />

                <div className="outlet container">
                    
                    <Outlet />
                </div>

            </div>
        </>

    )
}

export default Layouts
