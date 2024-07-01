import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from 'dayjs';

export default function CalendarMu({ date, setDate }) {
  console.log(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker 
        value={dayjs(date)}
        onChange={setDate} 
        minDate={dayjs(new Date())}
        // maxDate={dayjs('2022-12-31')}
      />
    </LocalizationProvider>
  );
}
