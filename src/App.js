import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";


function App() { 

    console.log("APPP");

    return (
        <div className="App">
            <BrowserRouter>

                <Routes>
                    <Route path="/add" element={<Protected Cmp={AddProduct} /> }/>
                    <Route path="/update" element={<Protected Cmp={UpdateProduct} />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
