import "./searchItem.css";
import { useNavigate } from 'react-router-dom';
import React from 'react'

const SearchItem = () => {
    
const navigate = useNavigate();


const Disponible = () =>{
    navigate("/taxi/1" );
  };

  return (
    
    <div className="searchItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtTmnqqQke4P44qd576cCXIXQLjqvCOgVqw&usqp=CAU"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Taxi Mini Bus ClassV</h1>
        <span className="siDistance">prix 500</span>

 
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
   
        <div className="siDetailTexts">
          <span className="siPrice">100€</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={Disponible}>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;



