import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import WifiIcon from '@mui/icons-material/Wifi';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TvIcon from '@mui/icons-material/Tv';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import './services.css'

const Services = () => {
  return (
    <>
      <Navbar/>
      <Hero title="Extra Services"/>
      <Container className='service__container'>
         <Grid container spacing={2}>
            <Grid item md={4}>
               <div className='service-card'>
                  <LocalTaxiIcon/>
                  <div className='service-name'>
                     Airport Pickup
                  </div>
               </div>
            </Grid>
            <Grid item md={4}>
               <div className='service-card'>
                  <WifiIcon/>
                  <div className='service-name'>
                     Wi-Fi
                  </div>
               </div>
            </Grid>
            <Grid item md={4}>
               <div className='service-card'>
                  <VisibilityOffIcon/>
                  <div className='service-name'>
                     Private Balcony
                  </div>
               </div>
            </Grid>
            <Grid item md={4}>
               <div className='service-card'>
                  <TvIcon/>
                  <div className='service-name'>
                     Widescreen TV
                  </div>
               </div>
            </Grid>
            <Grid item md={4}>
               <div className='service-card'>
                  <Battery5BarIcon/>
                  <div className='service-name'>
                    24/7 Power Supply
                  </div>
               </div>
            </Grid>
            <Grid item md={4}>
               <div className='service-card'>
                  <LocalLaundryServiceIcon/>
                  <div className='service-name'>
                     Laundary Pickup
                  </div>
               </div>
            </Grid>
         </Grid>
      </Container>
      <Footer/>
    </>
  )
}

export default Services