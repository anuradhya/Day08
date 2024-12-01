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

    const handlelogin =(e)=>{
        e.preventDefault();

        const user=Studentdata.find(
            (user)=>
                user.name===Credential.username &&
            user.password===Credential.password
        );

    if(user){
        console.log("Login Successful");
        setCredentials({username:"",password:"",error:""});
        navigate("/dashboard");
    }else{
        setCredentials((prev)=>({
            ...prev,
            error:"Please check your username and password",
        }))
    }
}
    return(
        <>
        </>
    )
}