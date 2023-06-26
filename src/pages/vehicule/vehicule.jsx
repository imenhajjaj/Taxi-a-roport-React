import React from "react"
import "./vehicule.css";

import Header from "../../components/navbar/header/Header"
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Add from "../../components/Add";
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Vehicule = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://geneve-limousine-service.com/wp-content/uploads/2022/03/location-voiture-limousine-geneve-chauffeur-prive.webp",
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/06/83/ce/van-from-tunisia-airport.jpg?w=1200&h=1200&s=1",
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3d/81/6e/caption.jpg?w=300&h=300&s=1",
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/d2/2c/82/v-class.jpg?w=500&h=400&s=1",
    },
    {
      src: "https://www.navetteleman.ch/wp-content/uploads/revslider/minibus/navetteleman-minibus.jpg",
    },
    {
      src: "https://www.nobletransfer.com/upload/userfiles/images/5%20Places%20to%20visit%20in%20Grindelwald%203(3).png",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const navigate = useNavigate();

  const Add = () =>{
    navigate("/Create");
  };
  
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>

      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={Add} >Réserver maintenant</button>
          <h1 className="hotelTitle">POURQUOI CHOISIR NAVETTELEMAN.TN ?</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Tunis Berge de Lac</span>
          </div>
          <span className="hotelDistance">
          Navette Leman est votre solution de transport ponctuel, confortable et à des tarifs avantageux : Le tarif d’un taxi limousine ou mini bus Aéroport est pas cher et connu d’avance, donc pas de surprises.          </span>
          <span className="hotelPriceHighlight">
          Transfert privé avec chauffeur
Il s'agit d'un service porte-à-porte avec mise à disposition d'un véhicule privé avec chauffeur.          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">NOS SERVICES DE TRANSFERT AÉROPORT</h1>
              <p className="hotelDesc">
              Transfert Aéroport en toute sécurité
Les chauffeurs de nos taxis limousine ont une conduite appropriée en toute sécurité avec plusieurs années d'expérience et une bonne connaissance de la région.
              </p>
              <p className="hotelDesc">

              Navette Aéroport en meilleures conditions
Nous mettons à votre disposition des véhicules de luxe (Van Mercedes Class V, Vito, ...) à une capacité de 1 à 15 personnes permettant de garantir le confort et la ponctualité attendus.
              </p>
              <p className="hotelDesc">
              Tarifs de transfert Aéroport pas cher
Nous vous proposons des transferts de prestige aux meilleurs prix du marché :
Nos navettes collectives à partir de 49 €.
Nos navette privées à partir de 160 €.

</p>
              
            </div>
           
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Vehicule


