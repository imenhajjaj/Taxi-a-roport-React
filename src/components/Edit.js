import React, {useEffect, useState} from  'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Client from './Client';
import {v4 as uuid} from "uuid";
import { Link, useNavigate} from 'react-router-dom';
import "./Add.css";
function Edit(){
    const [name, setName] = useState("");
    const [age, setage] = useState("");
    const [id, setId] = useState("");
    let history = useNavigate();

    var index = Client.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e) => {
        e.preventDefault();
  
        let a = Client[index];
        a.Name = name;
        a.age = age;


        history("/admin");


    }
    useEffect(()=> {
        setName(localStorage.getItem('Name'))
        setage(localStorage.getItem('age'))
        setId(localStorage.getItem('Id'))

    },[])

    return (
<div>
<div className="re">

<form>

            <label>
                Nom:
                <input type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}/>

                </label>
<br></br>
<br></br>
            <label> Email:
                <input type="text" placeholder="Enter Age" value={age} required onChange={(e) => setage(e.target.value)}/>
                    
                </label>

            <button onClick={(e) => handleSubmit(e)} type="submit" >Update</button>
            </form>






</div>

</div>


    )

}

export default Edit;