import '../../assets/css/calendar.css'
// src/Calendar.js
import React, { useState } from 'react';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getFirstDayOfMonth = () => {
    return new Date(currentYear, currentMonth, 1).getDay();
  };

  const getTotalDaysInMonth = () => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(new Date(currentYear, currentMonth, date));
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button className="prev-month" onClick={handlePreviousMonth}>
            &lt;
          </button>
          <h2>
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button className="next-month" onClick={handleNextMonth}>
            &gt;
          </button>
        </div>
        <div className="calendar-grid">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="calendar-day-header">
              {day}
            </div>
          ))}
          {Array.from({ length: getFirstDayOfMonth() }, (_, index) => (
            <div key={`empty-${index}`} className="calendar-day"></div>
          ))}
          {Array.from({ length: getTotalDaysInMonth() }, (_, index) => (
            <div
              key={index + 1}
              className={`calendar-day${
                selectedDate.getDate() === index + 1 &&
                selectedDate.getMonth() === currentMonth &&
                selectedDate.getFullYear() === currentYear
                  ? ' selected-day'
                  : ''
              }`}
              onClick={() => handleDateClick(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="time-picker">
        <div className="time-picker-row">
          <label htmlFor="start-time">Start Time:</label>
          <input
            type="time"
            id="start-time"
            value={startTime}
            onChange={handleStartTimeChange}
          />
        </div>
        <div className="time-picker-row">
          <label htmlFor="end-time">End Time:</label>
          <input
            type="time"
            id="end-time"
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
