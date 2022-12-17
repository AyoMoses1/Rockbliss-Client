import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import './navbar.css'
import logo from "../../assets/logo.png"


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white", 
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className="nav">
      {/* <CssBaseline /> */}
      <Toolbar className="toolbar">
        <div>
          <img src={logo} className="logo"/>
        </div>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className="nav-links">
            <Link to="/" className={""}>
              Home
            </Link>
            <Link to="/about" className={""}>
              About Us
            </Link>
            <Link to="/apartments" className={""}>
              Our Apartments
            </Link>
            <Link to="/services" className={""}>
              Extra Services
            </Link>
            <Link to="/contact" className={""}>
              Contact
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

// import "./navbar.css"
// import {Link} from "react-router-dom"
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";

// const Navbar = () => {

//   const {user} = useContext(AuthContext);
//   console.log(user)
  
//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to = "/" style={{color:"inherit", textDecoration:"none"}}>
//           <span className="logo">lamabooking</span>
//         </Link>

//         {user ? user.username : (<div className="navItems">
//           <button className="navButton">Register</button>
//           <button className="navButton">Login</button>
//         </div>)}
//         {/* {user && <h3>Welcome {user.details.username}</h3>} */}
//       </div>
//     </div>
//   )
// }

// export default Navbar