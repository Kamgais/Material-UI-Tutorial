import { Stack , Avatar, AvatarGroup} from "@mui/material"

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
        <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
        <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
        </Stack>

        <Stack direction='row' spacing={1}>
        <AvatarGroup>
        <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
        <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
        <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="Jane Doe"/>
        <Avatar src="https://randomuser.me/api/portraits/men/79.jpg" alt="John Doe"/>
        <Avatar sx={{bgcolor: 'primary.light'}} >BW</Avatar>
       

        </AvatarGroup>
        </Stack>

        <Stack direction='row' spacing={1}>
        <Avatar sx={{bgcolor: 'success.light' , width: 100, height: 100}} variant="square">CK</Avatar>
        <Avatar sx={{bgcolor: 'success.light' , width: 100, height: 100}}>BW</Avatar>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar