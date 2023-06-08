import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    useEffect(() => {

        if(localStorage.getItem('user-info')){
            navigate("/add");
        }
    },[])

    return ( <>
    <h1>IN Login</h1>
    </> );
}
 
export default Login;