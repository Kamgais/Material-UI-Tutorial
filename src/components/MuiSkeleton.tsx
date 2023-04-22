import {Stack, Skeleton} from '@mui/material'

const MuiSkeleton = () => {
  return (
   <Stack spacing={2} width='250px'>
    <Skeleton variant='text' animation='wave'/>
    <Skeleton variant='circular' width={40} height={40}/>
    <Skeleton variant='rectangular' width={250} height={125}/>
   </Stack>
  )
}

export default MuiSkeleton