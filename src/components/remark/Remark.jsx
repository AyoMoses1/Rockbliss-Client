import { Grid } from '@material-ui/core'
import React from 'react'
import "./remark.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import remark from "../../assets/pictures/remark.jpg"
import manager from "../../assets/pictures/ayo.png"

const Remark = () => {

    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        // ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
      }));


  return (
    <Grid container spacing={2} className="remark-container container">
        <Grid item xs={12} md={5} className='remark-img-container'>    
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
                className="remark-box"
            >
                <div> +76 Big Suites </div>
            </Box>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={6}>
            <div className='title'>ROCKBLISS APARTMENTS</div>
            <div className='caption'>Relax in our <br/> Apartment Resort</div>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} className='text-muted'>
                    Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl.
                </Grid>
                <Grid item sm={12} md={6} className='text-muted'>
                    Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl.
                </Grid>
                <Grid item sm={12} md={6} className='text-muted'>
                    Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl.
                </Grid>
                <Grid item sm={12} md={6} className='text-muted'>
                    Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl.
                </Grid>
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

export default Remark