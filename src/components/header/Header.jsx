import "./header.css";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/authContext";
import HeaderSearch from "../HeaderSearch";

const Header = ({ type, aboutPage }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const {user} = useContext(AuthContext)

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const {dispatch} = useContext(SearchContext)

  const handleSearch = () => {
    if(openDate && dates){
      if((dates[0].startDate !== dates[0].endDate) && (JSON.stringify(dates[0].startDate).split('T')[0] !== JSON.stringify(dates[0].endDate).split('T')[0])){
        // console.log(dates, "These are the dates")
        dispatch({type: "NEW_SEARCH", payload:{destination:"Ado Ekiti",dates, options}})
        localStorage.setItem("state", JSON.stringify({destination:"Ado Ekiti",dates, options}))
        navigate("/hotels", { state: { destination: "Ado Ekiti", dates, options } });
      }
      else{
        alert("Please select an end date")
      }
    }
    else{
      setOpenDate(true)
      alert("Please select a start and an end Date")
    }
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              {aboutPage ? "About Us": " A lifetime of discounts? It's Genius." }
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            {!user && <button className="headerBtn">Sign in / Register</button>}
            {!aboutPage && 
              <HeaderSearch
                setDestination = {setDestination}
                setOpenDate = {setOpenDate}
                setOpenOptions = {setOpenOptions}
                openDate = {openDate}
                openOptions = {openOptions}
                handleSearch ={handleSearch}
                dates = {dates}
                setDates = {setDates}
                handleOption = {handleOption}
                options={options}
                className='header-search'
              />
            }
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
