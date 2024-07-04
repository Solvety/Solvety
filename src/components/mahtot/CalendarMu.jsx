import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useEffect } from 'react';

export default function CalendarMu({deadline, setDeadline, startDate, setStartDate, type, resetClicked, setResetClicked}) {
  const [value, setValue] = React.useState(dayjs(''));

  console.log(value.$d)

  useEffect(() => {
    if (type === 'deadline') {
      if (value.$d.toString() === 'Invalid Date') {
        setDeadline(null);
      } else {
        setDeadline(dayjs(value.$d).format('MM/DD/YYYY hh:mm A'));
      }
    } else {
      if (value.$d.toString() === 'Invalid Date') {
        setStartDate(null);
      } else {
        setStartDate(dayjs(value.$d).format('MM/DD/YYYY hh:mm A'));
      }
    }

    if(resetClicked){
      setValue(dayjs(''))
    }
  }, [value, resetClicked]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
      
        <DateTimePicker
          // label="Controlled picker"
          placehol
          value={value}
          minDate={dayjs()}
          onChange={(newValue) => {setValue(newValue)
                                   setResetClicked(false)
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

