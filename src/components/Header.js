import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav-bar-wrapper">
                        {localStorage.getItem("user-info") ? (
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
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
