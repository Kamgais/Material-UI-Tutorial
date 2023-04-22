import { Box, Card, CardContent, Typography , CardActions, Button, CardMedia} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
        component='img'
        height='140'
        image="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c"
        alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
            velit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto quis unde facere illum! Laudantium ut eaque consequatur,
            sed enim, perferendis nesciunt non commodi sit, omnis dignissimos!
            At accusantium veritatis ducimus!
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">
                Share
            </Button>
            <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
