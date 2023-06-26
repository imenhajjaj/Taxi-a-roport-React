import "./propertyList.css"

const PropertyList = () => {
    return(
    <div className="pList">
        <div className="pListItem">

            <img src="https://www.civitatis.com/f/francia/paris/guia/taxi.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Taxi</h1>
                <h2>Tarif a partir: 120 €</h2>

            </div></div>


            <div className="pListItem">

<img src="https://www.limokrystal.com/wp-content/uploads/2016/07/image_aeroport-1.png" alt="" className="pListImg" />
<div className="pListTitles">
    <h1>Limousine</h1>
    <h2>Tarif a partir: 300€</h2>

</div></div>        <div className="pListItem">

<img src="https://content.phuket101.net/wp-content/uploads/20180828233502/phuket-airport-mini-bus.jpg" alt="" className="pListImg" />
<div className="pListTitles">
    <h1>Mini Bus</h1>
    <h2>Tarif a partir: 100 €</h2>

</div></div>


    </div>);
};
export default PropertyList