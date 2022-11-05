import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);


  // <Link to="/" className={""}>
  // Home
  // </Link>
  // <Link to="/about" className={""}>
  //   About Us
  // </Link>
  // <Link to="/" className={""}>
  //   Our Apartments
  // </Link>
  // <Link to="/" className={""}>
  //   Extra Services
  // </Link>
  // <Link to="/" className={""}>
  //   Booking Terms
  // </Link>
  // <Link to="/" className={""}>
  //   Lease Plan
  // </Link>
  // <Link to="/" className={""}>
  //   Make A Review
  // </Link>
  // <Link to="/contact" className={""}>
  //   Contact
  // </Link>
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className="drawer-link">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className="drawer-link">About Us</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/apartments" className="drawer-link">Our Apartments</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/services" className="drawer-link">Extra Services</Link>
            </ListItemText>
          </ListItem>
          {/* <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/terms">Booking Terms</Link>
            </ListItemText>
          </ListItem> */}
          {/* <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/lease">Lease Plan</Link>
            </ListItemText>
          </ListItem> */}
          {/* <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/review">Make A Review</Link>
            </ListItemText>
          </ListItem> */}
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className="drawer-link">Contact</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon  className="menu-icon"/>
      </IconButton>
    </>
  );
}
export default DrawerComponent;