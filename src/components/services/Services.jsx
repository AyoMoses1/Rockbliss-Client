import { Grid } from '@material-ui/core'
import React from 'react'
import './services.css'
import room from '../../assets/highlights/sadelsrockblis14.jpg'
import menu from '../../assets/highlights/sadelsrockblis4.jpg'
import laundary from '../../assets/highlights/sadelsrockblis50.jpg'
import spa from '../../assets/highlights/sadelsrockblis18.jpg'
import {Carousel} from 'react-carousel-minimal'


const Services = () => {

    const data = [
        {
          image: room,
          caption: "We provide an excellent room service"
        },
        {
          image: laundary,
          caption: "Keeping you clean in your stay with us"
        },
        {
          image: spa,
          caption: "We have the best hands"
        },
        {
          image: menu,
          caption: "We provide a stable power supply"
        },
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

  return (
    <div className='service-container'>
        <h2>OUR AWESOME SERVICES</h2>
        <Grid container spacing={5}>
            <Grid item md={6} xs={12}>
            <Carousel
            data={data}
            time={3000}
            // width="850px"
            // height="500px"
            captionStyle={captionStyle}
            // radius="10px"
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            
            captionPosition="bottom"
            automatic={true}
            // dots={true}
            // pauseIconColor="white"
            // pauseIconSize="40px"
            slideBackgroundColor="grey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="20px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
                {/* <img src={taxi}  alt=""/> */}
            </Grid>
            <Grid item md={6} xs={12} >
                <Grid container spacing={2} className="services-list">
                    <Grid item md={12} sm={12} xs={12} lg={12} className='services'>
                        <div>
                            <h3>State of the Art Amenities</h3>
                            <p>Other amenities to get you started in your temporary home, usually including e.g. Hairdryer, Vacuum cleaner, Cleaning tools and detergent, Iron and ironing board, Laundry rack, Toilet paper, Hand soap, Shampoo and Conditioner</p>
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} lg={12} className='services'>
                        <div>
                            <h3>Well Equipped Space</h3>
                            <p>Our serviced apartment typically has more square meters than a traditional hotel room. We have room for your needs!</p>
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} lg={12} className='services'>
                        <div>
                            <h3>Laundary</h3>
                            <p>Depending on your selected service level, we can take care of the cleaning for you. From daily to one-time cleaning, you decide.</p>
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} lg={12} className='services'>
                        <div>
                            <h3>24-hour Helpline</h3>
                            <p>Access to 24-hour helpline: Did you break a chair? The AirCon too warm? Forenom’s own maintenance team is ready to jump in a car to help you!</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
       
    </div>
  )
}

export default Services