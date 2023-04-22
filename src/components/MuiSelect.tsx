import {Box, TextField, MenuItem} from '@mui/material';
import  {useState} from 'react';

const MuiSelect = () => {
    const [countries, countriesSet] = useState<string[]>([]);
    
    
    
    const handleChange = (events: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: string[] | string = events.target.value;

        countriesSet(typeof newValue === 'string'? newValue.split(',') : newValue)

    }
  return (
    <Box width='250px'>
        <TextField 
        label='Select country' 
        select 
        value={countries} 
        onChange={handleChange} 
        fullWidth
        SelectProps={{
            multiple: true
        }}
        size='small'
        color='secondary'
        helperText= 'Please select a country'
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect