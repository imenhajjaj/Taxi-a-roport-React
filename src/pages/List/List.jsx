import "./list.css"
import Header from "../../components/navbar/header/Header"
import Navbar from "../../components/navbar/Navbar"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"
import { useNavigate } from 'react-router-dom';


const List = () =>  {
    const location = useLocation();
    const [destination,setDestination] =useState(location.state.destination);
    const [date,setDate] =useState(location.state.date);
    const [openDate,setOpenDate ]= useState(false);
    const [options,setOptions] =useState(location.state.options);


const navigate = useNavigate();

const Disponible = () =>{
        navigate("/taxi/1" );
      };    

    return ( 
    <div>
    <Navbar/><Header type="list"/>
    <div className="listContainer">
        <div className="listWrapper">
            <div className="listSearch"> 
                <h1 className="lsTitle">Search</h1>
                <div className="lsItem">
                    <label>Aéroport </label>
                    <input placeholder={destination} type="text" />
                </div>
                <div className="lsItem">
                    <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} `}
                </span>
              
           {openDate &&( <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()}
                             ranges={date}
                             /> )}


                </div>
                <div className="lsItem">
                    <label>Options</label>
                    <div className="lsOptions">
                    <div className="lsOptionItem">
                   
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                          Enfant 
                        </span>
                        <input type="number" className="lsOptionInput" />
                    </div> <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Adulte  
                        </span>
                        <input type="number" className="lsOptionInput" />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Taxi
                        </span>
                        <input type="number" className="lsOptionInput" />
                    </div></div>
                </div>
                <button onClick={Disponible}>Search</button>
                </div>
               <div className="listResult"></div>
               <SearchItem/> 
               <SearchItem/>

               
           
            </div>
      

        </div>
        
    </div>
    )
}
export default List