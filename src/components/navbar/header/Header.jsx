
import { faBicycle, faBiking, faBug, faBus, faCalendar, faCalendarDays, faCar, faCarCrash, faMotorcycle, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';


const Header = ({type}) =>  {
  const [destination, setDestination] = useState("")

  const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options,setOptions] = useState({
        adulte:1,
        children:0,
        car:1,

      });
      const handleOption = (name, operation) => {
        setOptions((prev)=> {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1: options[name] - 1,
            };
        });
      };
    const navigate = useNavigate();

    const handleSearch = () =>{
      navigate("/taxi" , {state:{destination, date, options}});
    };
    const Register = () =>{
      navigate("/Vehi");
    };
    return ( 
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faCar} />Car</div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBus}/>Mini Bus</div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi}/>Taxi</div> 
                 <div className="headerListItem">
                <FontAwesomeIcon icon={faCar}/>Limousine</div>  
        
            </div>
           
           { type !== "list" && <>
            <h1 className="headerTitle">Navette Leman est une agence spécialisée dans le transport depuis et en direction de l’Aéroport.

</h1>
           <p className="headerDesc">Navette Leman est votre solution de transport ponctuel, confortable et à des tarifs avantageux : Le tarif d’un taxi limousine ou mini bus Aéroport de Tunis est pas cher et connu d’avance, donc pas de surprises. </p>
            <button className="headerBtn"  onClick={Register}>Sign in / Register</button>
            
            <div className="headersearch">
                <div className="headersearchItem">
                <FontAwesomeIcon icon={faPlane} className="headerIcon" />
                <input 
                type="text" 
                placeholder="Aéroport de départ" 
                className="headerSearchInput" 
                onChange={(e)=>setDestination(e.target.value)}/>
  
                </div>
                <div className="headersearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} 
                `}
 
                </span>
                {openDate &&
                <DateRange
                 className="date"
                 editableDateInputs={true}
                 onChange={item => setDate([item.selection])}
                 moveRangeOnFirstSelection={false}
                 ranges={date}
                 minDate={new Date()}
                 />}
                </div>

               
                <div className="headersearchItem">
                    <button className="headerBtn" onClick={handleSearch}> Search</button>
          
              </div>
    
              
            </div></>}
            </div>
        </div>
    
    )
}
export default Header