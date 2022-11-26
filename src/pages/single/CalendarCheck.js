import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment"
import './calendar.css';
 
function CalendarCheck({data}) {
  const [date, setDate] = useState(new Date());

  console.log(data, "This is the data")

  const [unavailableDates, setUnavailableDates] = useState([])

  const mark = data?.unavailableDates?.map(date => {
      const result = date.replace(/^(\d{4})-(\d{2})-(\d{2}).*$/, "$3-$2-$1");
      return result
  })
 
  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName={({ date, view }) => {
            if(mark?.find(x=>x===moment(date).format("DD-MM-YYYY"))){
             return  'unavailable'
            }
            else{
              return 'available'
            }
          }}
        />
      </div>
      {/* {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )} */}
      <div className='indicator'>
        <div><span className='available-ind'></span>Available</div>
        <div><span className='unavailable-ind'></span>Not Available</div>
      </div>
    </div>
  );
}
 
export default CalendarCheck;