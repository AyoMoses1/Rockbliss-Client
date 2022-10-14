import { Grid } from '@material-ui/core'
import React from 'react'
import "./aboutRemark.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import remark from "../../assets/pictures/indoor.jpg"
import manager from "../../assets/pictures/ayo.png"

const AboutRemark = () => {
  return (
    <Grid container spacing={2} className="about-remark-container container">
        <Grid item xs={12} md={5} className='about-remark-img-container'>    
            <img src={remark}/>
            <Box
                sx={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'black',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    color:'white',
                }}
                className="about-remark-box"
            >
                <div> +76 Big Suites </div>
            </Box>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={6} className='about-remark-caption'>
            <div className='title'>ROCKBLISS APARTMENTS</div>
            <div className='caption'>All Inclusive</div>
            <Grid container spacing={2}>
                <Grid item sm={12} md={12}>
                     Thus, if any of the understated reasons forms part of your reason for visiting Ado-Ekiti or residing in Ado-Ekiti, then we are delighted to have you as our guest:
                </Grid>
                <Grid item sm={12} md={12} className=''>
                    <li>If you simply want to have a retreat, relax and recreate.</li>
                    <li>If you want great comfort for your family while you are on vacation.</li>
                    <li>If you want an exquisite lodge to host guests for your upcoming event.</li>
                    <li>If you are on a business trip.</li>
                    <li>If you want to lodge associates, corporate partners, or expatriates.</li>
                    <li>Maybe you have an overnight suite or short-stay accommodation while you are in Lagos to pick your kids from a boarding</li> 
                    <li>school, or maybe you have a job interview or business project.</li>
                    <li>If you are on a job transfer to Ado-Ekiti, and before you settle your accommodation needs.</li>
                </Grid>
                At RockBliss Serviced Apartments, you will get the best at a very affordable price, and we will be glad to welcome you
                <Grid item sm={12} md={12} className="flex">
                    <div className='flex'>
                        <img src={manager} className="manager"/>
                        <Grid container>
                            <Grid item md={12} xs={12} className="name">Andrew Stuart</Grid>
                            <Grid item md={12} xs={12} className="role">Hotel Manager</Grid>
                        </Grid>
                    </div>
                    <div>
                        <img src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/03/signature.png" className='sign'/>
                    </div>
                </Grid>

            </Grid>
        </Grid>
    </Grid>
  )
}

export default AboutRemark