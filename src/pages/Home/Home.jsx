import Featured from "../../components/featured/Featured"
import Footer from "../../components/footer/Footer"
import FP from "../../components/FP/FP"
import MailList from "../../components/mailList/MailList"
import Header from "../../components/navbar/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"
const Home = () =>  {
    return ( 
    <div>
     <Navbar/>
     <Header/>
     <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Brows by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Principales destinations en Tunisie
</h1>
        <FP/>
        <MailList/>
        <Footer/>

      




    </div>
    </div>
    )
}
export default Home