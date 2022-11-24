import React from "react";
import TextField from '@mui/material/TextField';
import { Formik,Form, useFormik } from "formik";
import * as Yup from 'yup';
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import CheckoutCard from './Card';

function CheckoutForm({details}) {

   console.log(details, "This is the real deal")
   const navigate = useNavigate()

   const initialValues = {
      firstName: '',
      lastName:'',
      email:'',
      mobile:'',
      address:'',
      city:'',
      country:'',
      zip:'',
      request:'',

    };

   
   const onSubmit = (values, actions) => {
      navigate('/checkout', { state: {...values}})
   // votes: (values.voteOptions/50), price: values.voteOptions } });
   // state={{...values, id:details?.id, votes:details?.votes}}
   }

   const {values,handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
      initialValues:initialValues,
      validationSchema : checkoutSchema,
      onSubmit
    })

   return (
      <div className="">
         <h3 className="form-header">Billing Details</h3>
         <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
               <Grid item md={8}>
                  <Grid container spacing={2}>
                     <Grid item md={6} sm={12}>
                        <TextField
                           name='firstName'
                           label='First Name'
                           variant='outlined'
                           margin='normal'
                           fullWidth
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.firstName || ''}
                           error = {errors.firstName || touched.firstName}
                        />
                           {/* {errors.firstName && touched.firstName && <p className='error-text'>Please enter your first name</p>} */}
                     </Grid>
                     <Grid item md={6} sm={12}>
                        <TextField
                           name='lastName'
                           label='Last Name'
                           variant='outlined'
                           margin='normal'
                           fullWidth
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.lastName || ''}
                           error = {errors.lastName || touched.lastName}
                        />
                           {/* {errors.lastName && touched.lastName && <p className='error-text'>Please enter your last name</p>} */}
                     </Grid>
                     <Grid item md={6} sm={12}>
                        <TextField
                           name='email'
                           label='email'
                           variant='outlined'
                           margin='normal'
                           fullWidth
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.email || ''}
                           error = {errors.email || touched.email}

                        />
                           {/* {errors.email && touched.email && <p className='error-text'>Please enter a valid email address</p>} */}
                     </Grid>
                     <Grid item md={6} sm={12}>
                        <TextField
                           name='mobile'
                           label='Phone'
                           variant='outlined'
                           margin='normal'
                           fullWidth
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.mobile || ''}
                           error = {errors.mobile || touched.mobile}
                        />
                           {/* {errors.mobile && touched.mobile && <p className='error-text'>Please enter a valid mobile number</p>} */}
                     </Grid>
                     <Grid item md={6} sm={12}>
                        <TextField
                           name='address'
                           label='Address'
                           variant='outlined'
                           margin='normal'
                           fullWidth
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.address || ''}
                        />
                     </Grid>
                     <Grid item md={6} sm={12}>
                        <TextField
                           name='city'
                           label='City'
                           variant='outlined'
                           margin='normal'
                           fullWidth
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.city || ''}
                        />
                     </Grid>
                     <Grid item md={6} sm={12}>
                        <TextField
                           name='country'
                           label='Country'
                           variant='outlined'
                           margin='normal'
                           fullWidth
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.country || ''}
                        />
                     </Grid>
                     <Grid item md={6} sm={12}>
                        <TextField
                           name='zip'
                           label='Zip'
                           variant='outlined'
                           margin='normal'
                           fullWidth
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.zip || ''}
                        />
                     </Grid>
                     <Grid item md ={12}>
                        <h3 className="form-header">Special Requests</h3>
                        <TextField
                           id="outlined-multiline-static"
                           placeholder="Let us know if you have any special requests"
                           multiline
                           rows={6}
                           className="multiline"
                        />
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item md={1}></Grid>
               <Grid item md={3} sm={12}>
                  <div className="checkout-card">
                     <CheckoutCard data={details}/>
                     <Button
                        className='mb-4 px-12 checkout-btn'
                        variant='contained'
                        color='primary'
                        type='submit'
                        fullWidth
                     >
                        PROCEED TO CHECKOUT
                     </Button>
                  </div>
               </Grid>
               {/* <Grid item md={2}></Grid> */}
            </Grid>
         </form>
      </div>
   );
}


const checkoutSchema = Yup.object().shape({
   firstName: Yup.string().required('Please enter your first name'),
   lastName: Yup.string().required('Please enter your last name'),
   email: Yup.string().email().required('Email address is required'),
   mobile: Yup.number().positive().required('Please enter a valid mobile number'),
 });

export default CheckoutForm