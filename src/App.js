import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
            <Routes>
                <Route name='Home' path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App