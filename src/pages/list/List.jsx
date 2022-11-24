import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useContext } from 'react'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { Grid } from "@material-ui/core";
import { api } from "../../services/api";
import { SearchContext } from "../../context/SearchContext"


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined)

  const { searchedDates } = useContext(SearchContext);

  const {data, loading, error, reFetch} = useFetch(`${api}/api/hotels?city=${destination}&min=${min || 1}&max=${max || 100000}`) 

  console.log(data, "This is the data ***************************************")

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
  const alldates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const handleClick = () => {
    reFetch();
  }

  const isAvailable = (hotel) => {
    const isFound = hotel?.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
        
    return !isFound;
  };
  

  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      <div className="directions">
          <div className="search">
            <h4>Search</h4>
            <p>Choose your favorite room</p>
          </div>
          <div className="search">
            <h4>Booking</h4>
            <p>Enter your booking details</p>
          </div>
          <div className="search">
            <h4>Checkout</h4>
            <p>Use your preferred payment method</p>
          </div>
          <div className="search">
            <h4>Confirmation</h4>
            <p>Receive a confirmation email</p>
          </div>
      </div>
        <Grid container spacing={2} className='gridContainer'>
          <Grid item md={3} sm={12}>
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input placeholder={destination} type="text" value={destination}/>
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span  className='date-input' onClick={() => setOpenDate(!openDate)}>{`${format(
                  dates[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDates([item.selection])}
                    minDate={new Date()}
                    ranges={dates}
                  />
                )}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input  onChange={e => setMin(e.target.value)}type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input onChange={e => setMax(e.target.value)} type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
              <button onClick={handleClick}>Search</button>
            </div>
          </Grid>
          <Grid item md={8} sm={12}>
            <Grid container spacing={2} className="listResult">
            {loading ? (
                "loading"
              ) : (
                <>
                  {data.map((item) => (
                    <Grid item md={6}>
                       <SearchItem item={item} key={item._id} isAvailable={isAvailable}/>
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
};

export default List;
