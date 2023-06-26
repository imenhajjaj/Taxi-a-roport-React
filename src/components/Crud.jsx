
import "./Add.css";

import React, {fragment} from 'react';
// import { Button} from 'bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import Client from './Client';
import {Link, useNavigate} from 'react-router-dom'
import "./Add.css";


 function Crud(){
    let history = useNavigate();
    const handleEdit = (id, name , age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('Id', id);

    }
    const handleDelete = (id) => {
        var index = Client.map(function(e){
            return e.id
        }).indexOf(id);

        Client.splice(index,1);
        history('/admin');
    }
    return (
        <div className="back" >
    <fragment>
        <div className="regi" >

        <div  style={{margin:"5rem"}}>
            <table striped bordered hover size="lg">
                <thead >
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Client && Client.length > 0
                        ?
                        Client.map((item) =>{
                            return (
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.age}
                                    </td>
                                    <td className="ll">
                                    <Link className='d-grid gap-2' to="/Edit"> 
                                        <button  onClick={() => handleEdit(item.id, item.Name, item.age)} >Edit</button>
                                        </Link>
                                        &nbsp;  
                                        <button   onClick={() => handleDelete(item.id)} >Delete</button>  


                                </td>
                            </tr>
                            )
                        })
                        :
                        "No data avilable"

                    }
                </tbody>
            </table>
            <br>
            </br>
            <Link className='d-grid gap-2' to="/create"> 
                {/* <button size="lg">Create</button> */}
               </Link>
        </div>
        </div>
    </fragment>
    </div>
   
    )
}

export default Crud;