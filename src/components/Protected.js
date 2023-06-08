import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Protected = (props) => {

    const navigate = useNavigate();
    useEffect(() => {

        if(!localStorage.getItem('user-info')){
            navigate("/register");
        }
    },[])


    let Cmp = props.Cmp;
    return ( <>

        <Cmp />
    </>);
}
 
export default Protected;


