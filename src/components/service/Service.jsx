import { Grid } from '@material-ui/core'
import React from 'react'
import './service.css'

const Service = () => {
  return (
    <div className='service-section'>
        <div className='title'>ALL OFFERS</div>
        <div className='caption'>Relax on Vacation</div>
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <div className='number'>1</div>
                    <div className='heading'>Shuttle Service</div>
                    <div className='service-content'>We have dedicated handlers for your needed shuttle services for airport pickup and drop-off of our guests. Your comfort is our satisfaction indeed</div>
                    {/* <ul>
                        <li>In sit amet augue non dui</li>
                        <li>In sit amet augue non dui</li>
                    </ul> */}
                </Grid>
                <Grid item xs={12} md={3}>
                    <div className='number'>2</div>
                    <div className='heading'>laundry service</div>
                    <div className='service-content'>Our laundary is the leading laundry service in our arena with experience in dry cleaning and laundry, ironing, stitching, and stain removal services</div>
                    {/* <ul>
                        <li>In sit amet augue non dui</li>
                        <li>In sit amet augue non dui</li>
                    </ul> */}
                </Grid>
                <Grid item xs={12} md={3}>
                    <div className='number'>3</div>
                    <div className='heading'>food delivery</div>
                    <div className='service-content'>We make it possible for you to Order tasty meals from our restaurants near you and have them delivered to your doorstep</div>
                    {/* <ul>
                        <li>In sit amet augue non dui</li>
                        <li>In sit amet augue non dui</li>
                    </ul> */}
                </Grid>
                <Grid item xs={12} md={3}>
                    <div className='number'>4</div>
                    <div className='heading'>cable TV network</div>
                    <div className='service-content'>Our apartments have their own cable TV network, which provides full premium access to all channels as well as dual viewing capabilities. Also available is a high-speed WIFI</div>
                    {/* <ul>
                        <li>In sit amet augue non dui</li>
                        <li>In sit amet augue non dui</li>
                    </ul> */}
                </Grid>
            </Grid>
        </>
    </div>
  )
}

export default Service