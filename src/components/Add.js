import React, {useState} from  'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Client from './Client';
import {v4 as uuid} from "uuid";
import { Link, useNavigate} from 'react-router-dom'
import "./Add.css"


function Add(){
    const[name, setName] = useState('');
    const[age, setage] = useState('');
    let history = useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a = name;
        let b = age;
        Client.push({id: uniqueId, Name: a, age: b});
        history("/taxi/id");

    }

    return <div className="cret">

        <br></br>
        <form> 
            <p className="nat">RESERVER VOTRE NAVETTE</p>
            <label>
                Nom:
                <input type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}/>

                </label>
<br></br>
<br></br>
            <label> Email:
                <input type="text" placeholder="Enter your mail" required onChange={(e) => setage(e.target.value)}/>
                    
                </label>

            <button onClick={(e) => handleSubmit(e)} type="submit" alert >Submit</button>
            </form>



    </div>;


    
}
export default Add;