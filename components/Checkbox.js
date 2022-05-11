import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
    
    const [check, setcheck] = React.useState(false)
    console.log(check);
  return (
    <div>
      <Checkbox {...label} value={check}  onChange={()=>{setcheck(!check)}}/>
    </div>
  );
}
