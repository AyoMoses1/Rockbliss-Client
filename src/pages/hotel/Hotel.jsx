import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CancelIcon from '@mui/icons-material/Cancel';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/authContext";
import { api } from "../../services/api";
import  axios  from 'axios';
import { Grid } from "@material-ui/core";
import CheckoutForm from "../../components/form/Form";

const Hotel = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [openModal, setOpenModal] = useState(false)


  const {data, loading, error, reFetch} = useFetch(`${api}/api/hotels/find/${id}`)

  const {dates, options} = useContext(SearchContext)

  const {user} = useContext(AuthContext)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);
  
  const navigate = useNavigate()

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);

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


  const handleClick = () => {
    if(user){
        setOpenModal(true)
    }else{
      navigate("/login")
    }
  }

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);


  const handleReserve = async (id) => {
   
    try {
      // await axios.put(`http://localhost:8000/api/hotels/availability/${id}`, {
      //   dates: alldates,
      // })
      navigate("/checkout");
    } catch (err) {console.log(err)}
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 

  return (
    <div>
      <Navbar />
      <div className="directions">
          <div className="search">
            <h4>Search</h4>
            <p>Choose your favorite room</p>
          </div>
          <div className="search">
            <h4>Booking</h4>
            <p>Enter your booking details</p>
          </div>
          <div className="search">
            <h4>Checkout</h4>
            <p>Use your preferred payment method</p>
          </div>
          <div className="search">
            <h4>Confirmation</h4>
            <p>Receive a confirmation email</p>
          </div>
      </div>
      <div className="checkout-section">
        <Grid container spacing={2}>
            <Grid item md={12}>
              <div className="billing">
                <CheckoutForm details={data}/>
              </div>
            </Grid>
        </Grid>
      </div>
      {/* {loading ? "loading":
      (
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <CancelIcon className="close" onClick={() => setOpen(false)}/>
            <ArrowCircleLeftIcon className="arrow" onClick = {() => handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <ArrowCircleRightIcon className="arrow" onClick={()=>handleMove("r")}/>
          </div>
        )}
        <Grid container spacing={2}>
        <Grid item md={12}>
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <LocationOnIcon/>
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {data.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={data.photos?.[i]}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                {data?.desc}
              </p>
            </div>
          </div>
        </div> 
        </Grid>
          <Grid item md ={12}>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
              </h2>
              <button onClick={() => handleReserve(data._id)}>Reserve or Book Now!</button>
            </div>
          </Grid>
        </Grid>
      </div>)} */}
      <Footer />
    </div>
  );
};

export default Hotel;
