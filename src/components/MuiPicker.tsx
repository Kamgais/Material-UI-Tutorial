import {Stack, TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers'
import {useState} from 'react';

const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date|null>(null)
    console.log(selectedDate)
  return (
   <Stack spacing={4} sx={{width: '250px'}}>
    <DatePicker 
    label='Date Picker' 
    
     value={selectedDate} 
     onChange={(newDate: any) => setSelectedDate(newDate)}/>
   </Stack>
  )
}

export default MuiPicker