import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {useState} from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string|false>(false)

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded? panel: false)
    }
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
        <AccordionSummary
          id="panel1-header"
          arial-aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            velit corporis illum quasi beatae expedita dolor laboriosam
            voluptate? Ex voluptates perferendis beatae fugit a earum omnis
            ipsam, cum deserunt nulla iure nobis corporis voluptatibus adipisci
            suscipit, sapiente aliquam, tenetur quod modi incidunt. Dolorum
            veritatis incidunt labore error, numquam voluptate doloremque!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
        <AccordionSummary
          id="panel2-header"
          arial-aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            velit corporis illum quasi beatae expedita dolor laboriosam
            voluptate? Ex voluptates perferendis beatae fugit a earum omnis
            ipsam, cum deserunt nulla iure nobis corporis voluptatibus adipisci
            suscipit, sapiente aliquam, tenetur quod modi incidunt. Dolorum
            veritatis incidunt labore error, numquam voluptate doloremque!
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel3'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
        <AccordionSummary
          id="panel3-header"
          arial-aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            velit corporis illum quasi beatae expedita dolor laboriosam
            voluptate? Ex voluptates perferendis beatae fugit a earum omnis
            ipsam, cum deserunt nulla iure nobis corporis voluptatibus adipisci
            suscipit, sapiente aliquam, tenetur quod modi incidunt. Dolorum
            veritatis incidunt labore error, numquam voluptate doloremque!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
