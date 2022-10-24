import { Grid } from '@mui/material'
import React, {useEffect} from 'react'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import useFetch from '../../hooks/useFetch'
import { api } from '../../services/api'
import Apartment from './Apartment';
import './apartments.css'


function Apartments() {

  const [location, setLocation] = React.useState("Ado Ekiti")

  const {data, loading, error, reFetch} = useFetch(`${api}/api/hotels?city=${location}`)
  
  return (
    <>
        <Navbar/>
        <Hero title="Our Apartments"/>
        <div className='apartments'>
            <Grid container spacing={2}>
                {data.map((item, idx) => (
                  <Grid key={idx} item md={12}>
                    <Apartment item={item} key={item._id} />
                  </Grid>
                ))}
            </Grid>
        </div>
    </>
  )
}

export default Apartments