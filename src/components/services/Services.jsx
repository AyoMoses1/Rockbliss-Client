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
                            <h3>Restaurant</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} lg={12} className='services'>
                        <div>
                            <h3>Shuttle Service</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} lg={12} className='services'>
                        <div>
                            <h3>Laundary</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} lg={12} className='services'>
                        <div>
                            <h3>Spa- Beauty and Health</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
       
    </div>
  )
}

export default Services