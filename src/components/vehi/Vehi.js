import "./vehi.css"
import React,{useState} from 'react'

import Header from "../../components/navbar/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../footer/Footer";
import MailList from "../mailList/MailList";


const Vehi = () => {
    const[name,setName]=useState("imen");
    const[password,setPassword]=useState("0000");
    const[email,setEmail]=useState("imen@gmail.com");
    const collectData=()=>{
        console.warn(name,email,password)
    }


    return( <div className="nav-ul">

 <Navbar/>
           
<Header type="list"/>



<div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text"
             value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name"/>

            <input className="inputBox"
             value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter your mail"/>

            <input className="inputBox" value={password}
             onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="enter password"/>

            <button onClick={collectData} className="appbtn" type="button">SignUp</button>
        </div></div> 
        

);


};
<Footer/>




 export default Vehi