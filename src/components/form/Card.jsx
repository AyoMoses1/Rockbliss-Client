import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import './checkoutCard.css'


export default function CheckoutCard({data, setCounter}) {

   const state = JSON.parse(localStorage.getItem("state"))

   const {dates} = useContext(SearchContext)

   console.log(dates, "These are the dates")


   const getDatesInRange = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const date = new Date(start.getTime());

      const dates = [];

      while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
      }

      return dates;
   };

   const alldates = getDatesInRange(state.dates[0]?.startDate, state.dates[0]?.endDate);

   React.useEffect(()=> {
      setCounter(alldates.length)
   }, [])


   console.log(alldates)


  return (
    <Card sx={{ maxWidth: 345 }} className='checkout-card'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
               {data.name && data?.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data?.name}
        subheader={data?.city}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.photos ? data?.photos[0]: ''}
        alt={data.name}
      />
      <CardContent>
         <h3 className='checkout-header'>Booking Details</h3>
         <div className='card-flex'>
            <div>Branch</div>
            <div>{data?.city}</div>
         </div>
         <div className='card-flex'>
            <div>Check In </div>
            <div>{state?.dates[0].startDate}</div>
         </div>
         <div className='card-flex'>
            <div>Check Out</div>
            <div>{state?.dates[0].endDate}</div>
         </div>
         <div className='card-flex'>
            <div>Nights</div>
            <div>{alldates.length}</div>
         </div>
         <div className='card-flex'>
            <div>Guests</div>
            <div>{state.options.adult} Adults, {state.options.children} Children</div>
         </div>
         <h3 className='checkout-header'>Price Summary</h3>
         <div className='card-flex'>
            <div>{data?.name}</div>
            <div>{data?.cheapestPrice}</div>
         </div>
         <div className='card-flex'>
            <div>Guests</div>
            <div>{data?.city}</div>
         </div>
         <div className='card-flex total-price'>
            <div>Total Price</div>
            <div>{data?.cheapestPrice * alldates.length}</div>
         </div>
      </CardContent>
    </Card>
  );
}
