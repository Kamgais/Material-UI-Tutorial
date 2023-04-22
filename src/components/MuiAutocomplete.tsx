import {Stack, Autocomplete, TextField} from '@mui/material';
import { useState } from 'react';


type Skill = {
  id: number,
  label: string
}

const MuiAutocomplete = () => {
    const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React']
    const [value, setValue] = useState<string|null>(null)
    const [paramState, setParams] = useState<Skill|null>(null)

    const skillOptions = skills.map((skill, index) => ({
      id: index + 1,
      label: skill
    }))

  return (
   <Stack spacing={2} width='250px'>
    <Autocomplete 
    options={skills} 
    renderInput={(params) => <TextField {...params} label='Skills' />}
    value={value}
    onChange={(_e:any, newValue: string|null) => setValue(newValue)}
    freeSolo
    />

<Autocomplete 
    options={skillOptions} 
    renderInput={(params) => <TextField {...params} label='Skills' />}
    value={paramState}
    onChange={(_e:any, newValue: Skill|null) => setParams(newValue)}
    />
   </Stack>
  )
}

export default MuiAutocomplete