import {Stack, Chip, Avatar,} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'


const MuiChip = () => {
   
  return (
    <Stack direction='row' spacing={1}>
        <Chip label='Chip' color='primary' size='small' icon={<FaceIcon/>}/>
        <Chip 
        label='Chip' 
        color='success' 
        size='small' 
        variant='outlined'/>
        <Chip 
        label='Chip' 
        color='success' 
        size='small' 
        variant='outlined'
        avatar={<Avatar>SM</Avatar>}
        />

        <Chip 
        label='Click' 
        color='error' 
        size='small' 
        onClick={() => alert('Clicked')}
        avatar={<Avatar>SM</Avatar>}
        />

        <Chip 
        label='Click' 
        color='error' 
        size='small' 
        onDelete={() => alert('Delete handler called')}
        avatar={<Avatar>SM</Avatar>}
        />
    </Stack>
  )
}

export default MuiChip