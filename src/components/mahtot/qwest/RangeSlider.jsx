import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function RangeSlider({ id, max, initialValue }) {
  const [value, setValue] = React.useState(initialValue);
  const [marks, setMarks] = React.useState([
    {
      value: 10,
      label: '10',
    },
    {
      value: Math.floor(max / 3),
      label: `${Math.floor(max / 3)}`,
    },
    {
      value: Math.floor((max * 2) / 3),
      label: `${Math.floor((max * 2) / 3)}`,
    },
    {
      value: max,
      label: `${max}`,
    },
  ]);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }} id={id}>
      <Slider
        aria-label="Always visible"
        value={value}
        onChange={handleChange}
        disabled="true"
        step={50}
        marks={marks}
        max={max}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
