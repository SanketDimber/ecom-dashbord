import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
Protected

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Header />
                <h1>E-comm Project</h1>
                <Routes>
                    <Route path="/add" element={<Protected Cmp={AddProduct} /> }/>
                    <Route path="/update" element={<UpdateProduct />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
