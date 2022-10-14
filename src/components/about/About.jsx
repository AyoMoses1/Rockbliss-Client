import React from 'react'
import { Grid } from '@material-ui/core'
import './about.css'
import about1 from '../../assets/pexels-pixabay-271618.webp'
import about2 from '../../assets/pexels-pixabay-271639.webp'
import about3 from '../../assets/pexels-pixabay-262978.webp'
import about4 from '../../assets/pexels-thorsten-technoman-338504.webp'

// 
const About = () => {
  return (
    <div className='about-container'>
        <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
                <div className='about-content about-component-content'>
                    <h2>RockBliss Perfect's Touch</h2>
                    <p>At RockBliss Serviced Apartments, Nigeria, we provide furnished accommodation for executives, business and corporate stays, vacation rentals, and the flagship Ark of Premium Comfort is located in the Horizon of Bashiri Area, Ado-Ekiti, a tranquil and secure neighborhood. The apartments serve the greater Ado-Ekiti axis, providing fully furnished apartments for short and long-term rentals.
                    <br/>
                    <br/>
                    Our goal is to make you feel like you never left home. It provides you with all the usual comforts you are used to at home and more. Also, we strive to provide all your needs,comfort and more, allowing you to focus on your core business or leisure activities at less than half the cost of the average room.
                    </p>
                    <button>Book a Reservation</button>
                </div>
            </Grid>
            <Grid item md={6} xs={12}>
                <div className='about-gallery'>
                    <Grid container spacing={2}>
                        <Grid item md ={6} xs ={12}>
                            <img src = {about1} alt=""/>
                        </Grid>
                        <Grid item md ={6} xs ={12}>
                        <img src = {about2} alt=""/>
                        </Grid>
                        <Grid item md ={6} xs ={12}>
                            <img src = {about3} alt=""/>
                        </Grid>
                        <Grid item md ={6} xs ={12}>
                        <img src = {about4} alt=""/>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
       
    </div>
  )
}

export default About