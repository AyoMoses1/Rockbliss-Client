import React from 'react'
import { Grid } from '@material-ui/core'
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import CabinIcon from '@mui/icons-material/Cabin';
import './duration.css'

const Duration = () => {
  return (
    <div className='duration-container'>
        <Grid container spacing={3}>
            <div className='duration-flex'>
                <div className='flex-2 about-content duration-content'>
                    <h2>Unwind Your Perfect Apartment</h2>
                    <p>It is a 20-minute drive to the Ekiti Cargo Airport, 15 minutes' drive to Afe Babalola University/multi-sytem, a 2-minute drive to the Nigeria Police State Headquarters, and 5-8 minutes to virtually all the major banks and eateries in the state capital city; ranging from fast food to proper dining. The State Civic Centre (named after Chief Obafemi Awolowo) is located beside Government House and has cinema facilities, shopping malls, business centres, eateries, and other recreational and fun arcades. It is about a 5-minute drive away.
                    <br/>
                    <br/>
                    In our facility, no two rooms or apartments are the same, each being individually carefully finished and furnished with different color schemes and themes. Our rooms are exquisitely and tastefully finished and furnished, with exceptional attention being paid to details and moreso to comfort.
                    </p>
                </div>
                <div className='flex-1'>
                <div className='duration-caption'>
                    <Grid container spacing={2}>
                        <Grid item md ={6} xs ={12} className="duration-card">
                            <div className='icon-container'><CabinIcon className='duration-icon'/></div>
                            <h3>LONG STAY</h3>
                            <p>There is also facilities to take care of your long stay for longer period which could run into months or even years</p>
                        </Grid>
                        <Grid item md ={6} xs ={12} className="duration-card">
                            <div className='icon-container'><RoomServiceIcon className='duration-icon'/></div>
                            <h3>SHORT STAY</h3>
                            <p>We provide short stay accomodation which may be a few hours to a few weeks for your vacation or business trip</p>
                        </Grid>
                        <Grid item md ={6} xs ={12} className="duration-card">
                        <div className='icon-container'><HouseboatIcon className='duration-icon'/></div>
                            <h3>ENTERTAINMENT</h3>
                            <p>Our entertainment in rooms is second to non. All rooms have Flat screens TV and premium bouquet DSTV decoder</p>
                        </Grid>
                        <Grid item md ={6} xs ={12} className="duration-card">
                            <div className='icon-container'><BedroomParentIcon className='duration-icon'/></div>
                            <h3>ENTERTAINMENT</h3>
                            <p>Our entertainment in rooms is second to non. All rooms have Flat screens TV and premium bouquet DSTV decoder</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
            </div>
        </Grid>
       
    </div>
  )
}

export default Duration