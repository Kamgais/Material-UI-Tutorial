import {Stack, ImageList, ImageListItem, Box, ImageListItemBar} from '@mui/material';

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
        <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
            {
                itemData.map((item,index) => (
                    <ImageListItem key={index}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'/>
                    </ImageListItem>
                ))
            }
        </ImageList>

        <ImageList variant='woven' sx={{width: 500, height: 450}} cols={3} gap={8}>
            {
                itemData.map((item,index) => (
                   
                    <ImageListItem key={index}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'/>
                        <ImageListItemBar title={item.title}/>
                    </ImageListItem>
                    
                   
                ))
            }
        </ImageList>
        <Box sx={{width: 500, height: 450, overflowY: 'scroll'}}>
        <ImageList variant='masonry'  cols={3} gap={8}>
            {
                itemData.map((item,index) => (
                    <ImageListItem key={index}>
                        <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'/>
                    </ImageListItem>
                ))
            }
        </ImageList>
        </Box>
    </Stack>
  )
}


const itemData = [
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    }
    ,{
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    },
    {
        img: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
        title: 'Breakfast'
    }
]

export default MuiImageList