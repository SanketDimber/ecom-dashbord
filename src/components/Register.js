import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUp = async () => {
        let item = { name, email, password };
        console.log({ item });
        let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/jso",
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        console.log("result ", result);
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/add");
    };

    useEffect(() => {

        if(localStorage.getItem('user-info')){
            navigate("/add");
        }
    },[])

    return (
        <div className="regBox">
            <h3>Register</h3>
            <br></br>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    value={name}
                    name="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FloatingLabel>
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
            <Button onClick={signUp}>Submit</Button>
        </div>
    );
};

export default Register;
