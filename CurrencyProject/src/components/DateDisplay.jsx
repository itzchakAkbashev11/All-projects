import React, { useState, useEffect } from 'react';

const DateDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div>
      <h2 className='text-sky-800'>Date and Time:</h2>
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default DateDisplay;
