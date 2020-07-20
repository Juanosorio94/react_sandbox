import moment from 'moment';
import React from 'react';


const Time = ({time}) => {
 let timeString = moment(time).fromNow();
 return (
   <>
    {timeString}
   </>
 )
}

export default Time;