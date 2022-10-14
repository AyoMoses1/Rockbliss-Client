import { Grid } from '@material-ui/core'
import React from 'react'
import './aboutGallery.css'
import gallery1 from "../../assets/pictures/gallery.jpg"
import gallery2 from "../../assets/pictures/gallery2.jpg"
import gallery3 from "../../assets/pictures/gallery3.jpg"
import gallery4 from "../../assets/pictures/gallery4.jpg"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const AboutGallery = () => {
  return (
    <>
        <Grid container spacing={2} className='gallery-container'>
            <Grid item xs={12} md={4} className='city-view'>
                <div>
                    <div className='title'>CITY VIEW</div>
                    <div className='caption'>Small Suite</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, minima.</p>
                    <div className='socials'>
                        <Grid container spacing={1}>
                            <Grid item xs={3} md={2}><TwitterIcon/></Grid>
                            <Grid item xs={3} md={2}><InstagramIcon/></Grid>
                            <Grid item xs={3} md={2}><TwitterIcon/></Grid>
                            <Grid item xs={3} md={2}><InstagramIcon/></Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <img src={gallery1}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <img src={gallery2}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <img src={gallery3}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <img src={gallery4}/>
            </Grid>
            <Grid item xs={12} md={4} className='sea-view'>
                <div>
                    <div className='title'>SEA VIEW</div>
                    <div className='caption'>Family Suite</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, minima.</p>
                    <div className='socials'>
                        <Grid container spacing={1}>
                            <Grid item xs={3} md={2}><TwitterIcon/></Grid>
                            <Grid item xs={3} md={2}><InstagramIcon/></Grid>
                            <Grid item xs={3} md={2}><TwitterIcon/></Grid>
                            <Grid item xs={3} md={2}><InstagramIcon/></Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
        </Grid>
    </>
  )
}

export default AboutGallery