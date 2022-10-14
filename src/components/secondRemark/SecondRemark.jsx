import { Grid } from '@material-ui/core'
import React from 'react'
import "./secondRemark.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import remark from "../../assets/pictures/remark.jpg"
import rem from "../../assets/pictures/rem.jpg"
import manager from "../../assets/pictures/ayo.png"

const SecondRemark = () => {

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
      }));


  return (
    <Grid container spacing={2} className="remark-container container">
        <Grid item xs={12} md={6} className='remark-img-container second-remark'>
            <Grid container spacing={2}>
                <Grid item md ={6}>
                    <img src={remark}/>
                </Grid>
                <Grid item md ={6}>
                    <img src={rem}/>
                </Grid>    
            </Grid>
        </Grid>
        {/* <Grid item md={1}></Grid> */}
        <Grid item xs={12} md={6}>
            <div className='title'>ROCKBLISS FACILITIES</div>
            <div className='caption'>The Structure</div>
            <Grid container spacing={2}>
                <Grid item sm={12} md={12} className='text-muted'>
                    Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Grid>
                <Grid item md={12}>
                    <div className='room'>
                        Room Service
                    </div>
                </Grid>
                <Grid item md={12}>
                    <div className='kitchen'>
                        Breakfast Included
                    </div>
                </Grid>
                <Grid item md={12}>
                    <div className='laund'>
                        Laundary & Ironing
                    </div>
                </Grid>
            </Grid>
        </Grid>
        <Grid container spacing={2} className='remark-services'>
            <Grid item xs={6} sm={6} md={3} className='flex'>
                <img src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/icon-16.png"/>
                <div>
                    <h5>Smart Key</h5>
                    <p>Lorem ipsum dolor</p>
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className='flex'>
                <img src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/icon-15.png"/>
                <div>
                    <h5>Store Luggage</h5>
                    <p>Lorem ipsum dolor</p>
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className='flex'>
                <img src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/icon-17.png"/>
                <div>
                    <h5>Room Service</h5>
                    <p>Lorem ipsum dolor</p>
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className='flex'>
                <img src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/icon-18.png"/>
                <div>
                    <h5>Disinfection</h5>
                    <p>Lorem ipsum dolor</p>
                </div>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default SecondRemark