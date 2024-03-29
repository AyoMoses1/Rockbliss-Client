import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({item, isAvailable}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        {/* <span className="siDistance">{item.distance}m from center</span> */}
        {/* <span className="siTaxiOp">Free airport taxi</span> */}
        <span className="siSubtitle">
          {item.desc.slice(0, 100) + "..."}
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
          
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
        }
        
        <div className="siDetailTexts">
          <span className="siPrice">₦{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            {isAvailable(item) ? 
              <button className="siCheckButton">Book Now</button> : <button className="unavailable" disabled>Those dates are not available</button>
            } 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
