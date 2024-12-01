import {Studentdata} from '../data/data';
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";

export default function Login(){
    const navigate=useNavigate();

    const [Credential,setCredentials]=useState({
        username: "",
        password: "",
        error: "",
    });

    const handlechange=(e)=>{
        e.preventDefault();
        const {name, value}=e.target;
        setCredentials((prev)=>({
            ...prev,
            [name]:value,
        }))
    }


    return(
        <>
        </>
    )
}