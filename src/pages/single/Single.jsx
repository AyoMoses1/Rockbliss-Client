import "../hotel/hotel.css";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { Reserve } from "../../components/reserve/Reserve";
import { api } from "../../services/api";
import { Carousel } from "react-bootstrap";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./single.css";

const Single = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error, reFetch } = useFetch(
    `${api}/api/hotels/find/${id}`
  );

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Navbar />
      <div className="single-container">
        <Carousel fade autoPlay className="carousel">
          {data?.photos?.map((photo, idx) => (
            <Carousel.Item className="car-image">
              <img src={photo} className={"d-block w-100"} alt={"image"} />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="hotelWrapper">
          <div className="flex-one">
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <LocationOnIcon />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of City</h1>
                <p className="hotelDesc">{data?.desc}</p>
              </div>
            </div>
          </div>
          <div className="hotelDetailsPrice flex-two">
            <h1>Perfect for a night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </span>
            <button onClick={() => handleClick(data._id)}>
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
