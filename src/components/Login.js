import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Header from "./Header";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const data = { email, password };

    const login = async () => {
        const item = { email, password };
        console.log(item);

        let result = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(item),
        });

        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        console.log(result);
        navigate("/add");
    };
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add");
        }
    }, []);

    return (
        <>
            <Header />
            <div className="regBox">
                <h3>Login</h3>
                <br></br>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FloatingLabel>
                <br></br>
                <Button onClick={login}>Submit</Button>
            </div>
        </>
    );
};

export default Login;
