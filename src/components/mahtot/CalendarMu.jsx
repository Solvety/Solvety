import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useEffect } from 'react';

export default function CalendarMu({deadline, setDeadline}) {
  const [value, setValue] = React.useState(dayjs(''));
console.log(value.$d)
  useEffect(()=>{
      setDeadline(value.$d.toString())
  }, [value])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
      
        <DateTimePicker
          // label="Controlled picker"
          value={value}
          minDate={dayjs()}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

