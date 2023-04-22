import  {Box,Stack, Divider, Grid, Paper} from '@mui/material';

const MuiLayout = () => {
  return (
    <Paper sx={{padding: '20px'}} elevation={4}>
    <Stack sx={{border: '1px solid'}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
   <Box component='span' sx={{
    backgroundColor: 'primary.main', 
    color: 'white',
    height: '100px',
    width: '100px',
    padding: '16px',
    '&:hover': {
        backgroundColor: 'primary.light'
    }
    }}>
    CodeEvolution
   </Box>
   <Box display='flex' height='100px' width='100px' bgcolor='primary.main' margin='20px'>
    CodeEvolution
   </Box>
   </Stack>

   <Grid container my={4} spacing={2}>
    <Grid item xs>
        <Box p={2} bgcolor='secondary.light' >Item1</Box>
    </Grid>
    <Grid item xs>
    <Box p={2} bgcolor='secondary.light'>Item2</Box>
    </Grid>
    <Grid item xs>
    <Box p={2} bgcolor='secondary.light'>Item3</Box>
    </Grid>
    <Grid item xs='auto'>
    <Box p={2} bgcolor='secondary.light'>Item4</Box>
    </Grid>
   </Grid>
   </Paper>
  )
}

export default MuiLayout