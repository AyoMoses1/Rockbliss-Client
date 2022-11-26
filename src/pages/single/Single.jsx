import "../hotel/hotel.css";
import Navbar from "../../components/navbar/Navbar";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { api } from "../../services/api";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import WifiIcon from '@mui/icons-material/Wifi';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TvIcon from '@mui/icons-material/Tv';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
// import 'swiper/css';
import "swiper/css/pagination";
import "./single.css";
import { Container, Grid } from '@material-ui/core';
import CalendarCheck from "./CalendarCheck"

const Single = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error, reFetch } = useFetch(
    `${api}/api/hotels/find/${id}`
  );

  const handleClick = (id) => {
    console.log(id);
  };


  const random  = () => { return Math.floor(Math.random() * 4)};
  const slides = [];
  for (let i = 0; i < data?.photos?.length; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          style={{ width: '100%' }}
          // src={`https://picsum.photos/id/${i + 1}/500/300`}
          src={data?.photos[i]}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="single-carousel">
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1028: {
              width: 1028,
              slidesPerView: 3,
            },
          }}
          id="main"
          width="480"
          navigation
          pagination
          spaceBetween={5}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
      </div>
      <div className="single-container">
          <Grid container spacing={2}>
            <Grid item md ={8}>
              <div className="single-flex">
                <h2 className="name heading">{data?.name}</h2>
                <h2 className="price"><span className="heading">${data?.cheapestPrice}</span>/per night</h2>
              </div>
              <div className="single-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit… Zril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur.
                  </p>
                  <h3 className="name heading">Apartment Availability</h3>
                  <CalendarCheck data={data}/>
              </div>
              <div className="single-services">
                <h2 className="services heading">Room Services</h2>
                <Container className='single-service__container'>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                          <div className='single-service-card'>
                              <LocalTaxiIcon/>
                              <div className='single-service-name'>
                                Airport Pickup
                              </div>
                          </div>
                        </Grid>
                        <Grid item md={4}>
                          <div className='single-service-card'>
                              <WifiIcon/>
                              <div className='single-service-name'>
                                Wi-Fi
                              </div>
                          </div>
                        </Grid>
                        <Grid item md={4}>
                          <div className='single-service-card'>
                              <VisibilityOffIcon/>
                              <div className='single-service-name'>
                                Private Balcony
                              </div>
                          </div>
                        </Grid>
                        <Grid item md={4}>
                          <div className='single-service-card'>
                              <TvIcon/>
                              <div className='single-service-name'>
                                Widescreen TV
                              </div>
                          </div>
                        </Grid>
                        <Grid item md={4}>
                          <div className='single-service-card'>
                              <Battery5BarIcon/>
                              <div className='single-service-name'>
                                24/7 Power Supply
                              </div>
                          </div>
                        </Grid>
                        <Grid item md={4}>
                          <div className='single-service-card'>
                              <LocalLaundryServiceIcon/>
                              <div className='single-service-name'>
                                Laundary Pickup
                              </div>
                          </div>
                        </Grid>
                    </Grid>
                  </Container>
              </div>
            </Grid>
            <Grid item md ={1}></Grid>
            <Grid item md ={3}>
                <div className="card-1">
                    This apartment is part of <span className="heading">Rockbliss</span>
                </div>
                <div className="card-2" style={{background: `url(${data.photos ? data?.photos[random(0)] : "https://cdn.pixabay.com/photo/2012/03/09/00/03/architecture-22527__340.jpg"})`}}>
                    <h3 className="heading zante">{data?.name}</h3>
                    <span className="dream">Live your dream</span>
                </div>
            </Grid>
          </Grid>
      </div>
      <Footer/>
    </div>
  );
};

export default Single;
