import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import { FaWifi } from 'react-icons/fa'
import WifiIcon from '@mui/icons-material/Wifi';
import { FaEye } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa'
import { FaCuttlefish } from 'react-icons/fa'

function Apartment({item}) {
  return (
    <Grid container spacing={2} className="apartments-section">
        <Grid item md={4} className='apartment-image'>       
           <img src={item.photos[0]}/>
        </Grid>
        <Grid item md={8}>
            <div className='apartment-details'>
                <Grid container spacing={2}>
                    <Grid item md ={8}>
                        <h4>{item.name}</h4>
                        <p>{item.desc.slice(0, 99) + '...'}</p>
                        <Grid container spacing={2}>
                            <Grid item sm={2} xs={2} md={2} className="icon-cont">
                                <WifiIcon/>
                            </Grid>
                            <Grid item sm={2} xs={2} md={2} className="icon-cont">
                                <FaEye/>
                            </Grid>
                            <Grid item sm={2} xs={2} md={2} className="icon-cont">
                                <FaBath/>
                            </Grid>
                            <Grid item sm={2} xs={2} md={2} className="icon-cont">
                                <FaCuttlefish/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md ={4} className='apart-det'>
                        <h4>{item.cheapestPrice}</h4>
                        <span>PER NIGHT</span>
                        <Link
                            style={{textDecoration: 'none'}}
                            to={
                                `/hotel/${item._id}`
                            }
                            className="ml-3 mr-4"
                            >
                            <div className='apartment-link'>MORE DETAILS <FaArrowRight/></div>
                        </Link>
                    </Grid>
                </Grid>
            </div>
            </Grid>
    </Grid>
  )
}

export default Apartment