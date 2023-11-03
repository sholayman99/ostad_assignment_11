import home from "../assets/images/home.jpg"
import "../assets/css/BgImage.css"

const BgImage = () => {
    return (
        <div className="bg-container">
            <div>
             <h2>Welcome To</h2>
             <h1> Sholayman World</h1>
             <button>Read More..</button>
            </div>
            <img src={home} />
        </div>
    );
};

export default BgImage;