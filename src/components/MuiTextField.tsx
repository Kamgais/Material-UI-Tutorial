import {Stack, TextField, InputAdornment} from '@mui/material'
import {useState} from 'react';

const MuiTextField = () => {
    const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={2}>
        <TextField label='Name' variant='outlined' value={value} onChange={e => setValue(e.target.value)} error={!value} helperText={!value? 'Required': 'Do not share your password with anyone'}/>
        <TextField label='Name' variant='filled'/>
        <TextField label='Name' variant='standard'/>
        </Stack>

        <Stack direction={'row'} spacing={2}>
        <TextField label='Small' size='small' color='secondary' variant='filled'/>
        </Stack>

        <Stack direction={'row'} spacing={2}>
        <TextField label='Input required' required variant='filled'/>
        <TextField label='Password' required variant='outlined' helperText='Do not share your password with anyone' type='password' disabled/>
        </Stack>

        <Stack direction={'row'} spacing={2}>
        <TextField label='Amount' InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
        }}/>
        <TextField label='Weight' InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
        }}/>
        </Stack>
    </Stack>
  )
}

export default MuiTextField