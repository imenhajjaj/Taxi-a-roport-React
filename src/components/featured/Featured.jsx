import "./featured.css"

const Featured = () => {
   return (
    <div className="featured">
        <div className="featuredItem">
        <img src="https://www.akhiyat-driver-cars.com/wp-content/uploads/2020/02/mini-bus.jpg" alt="" className="featuredImg" />
        <div className="feturedTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
        </div>
        <div className="featuredItem">
        <img src="https://www.shshire.com/wp-content/uploads/2017/07/mercedes-taxi-black-side-2.jpg" alt="" className="featuredImg" />
        <div className="feturedTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
        </div>        <div className="featuredItem">
        <img src="https://guide-taxi.fr/wp-content/uploads/2021/10/airport-g329a64cb4_640-640x330.jpg" alt="" className="featuredImg" />
        <div className="feturedTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
        </div>
    </div>
   )
}
export default Featured