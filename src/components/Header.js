import { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    var change = localStorage.getItem("user-info");
    const user = JSON.parse(localStorage.getItem("user-info"));

    const logout = () => {
        localStorage.clear();
        navigate("/register");
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav-bar-wrapper">
                        {change ? (
                            <>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )}
                    </Nav>
                    
                    {change ? ( 
                        <Nav>
                        <NavDropdown
                            title={user && user.name}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item
                                href="#action/3.1"
                                onClick={logout}
                            >
                                LogOut
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        ) : null
                    }
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
