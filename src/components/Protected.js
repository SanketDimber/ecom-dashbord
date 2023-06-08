import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Protected = (props) => {

    let Cmp = props.Cmp;
    return ( <>

        <Cmp />
    </>);
}
 
export default Protected;


