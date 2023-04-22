import {Stack, Alert, AlertTitle, Button} from '@mui/material'


const MuiAlert = () => {
  return (
   <Stack spacing={2}>
    <Alert severity='error'>
        This is an error alert
    </Alert>
    <Alert severity='info'>
        This is an info alert
    </Alert>

    <Alert severity='warning'>
        This is an warning alert
    </Alert>

    <Alert severity='success'>
        This is an success alert
    </Alert>

    <Alert severity='error' variant='outlined' onClose={() => alert('Closed Alert')}>
        <AlertTitle>Error</AlertTitle>
        This is an error alert
    </Alert>
    <Alert severity='info' variant='filled' >
    <AlertTitle>Info</AlertTitle>
        This is an info alert
    </Alert>

    <Alert severity='warning' variant='filled'>
    <AlertTitle>Warning</AlertTitle>
        This is an warning alert
    </Alert>

    <Alert severity='success' variant='filled' action={
        <Button color='inherit' size='small'>UNDO</Button>
    }>
    <AlertTitle>Success</AlertTitle>
        This is an success alert
    </Alert>
   </Stack>
  )
}

export default MuiAlert