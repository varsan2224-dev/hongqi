import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Layout from "./Layout"

function AppRoutes(){


     return(
        <div>
            <Routes>
                <Route element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="/products" element={<Products />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="*" />
                </Route>
            </Routes>
        </div>
     )
}

export default AppRoutes