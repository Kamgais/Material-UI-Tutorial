import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/** subtitle === h6 */}

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/** paragraph */}

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nulla
        velit nam quia, cupiditate minus id quas eligendi eos possimus dolores
        voluptates qui sapiente quasi, veritatis laudantium. Assumenda culpa hic
        non maiores sed deserunt corrupti. Nam officia delectus maxime
        obcaecati!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
        dolorem. Debitis facilis animi amet non! Recusandae ipsa quis ad aliquid
        minus provident natus odio ipsum suscipit facere odit optio eaque rerum
        doloremque saepe pariatur tempora, nobis impedit deleniti consectetur
        delectus.
      </Typography>
    </div>
  );
};

export default MuiTypography;
