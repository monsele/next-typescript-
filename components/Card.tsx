import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from "../styles/Home.module.css";
//import Checkboxes from './Checkbox';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

interface Props {
  taskname: string;
  description: string;
  assigned:string;
   assignee:string;
   done:boolean;
   team?:string;
}

const BasicCard:React.FC<Props>=(props)=>{
  const [check, setcheck] = React.useState<boolean>(false)
 // console.log(check);
  return (
    <div className={styles.cardspaceing}>
       <form>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {props.team}
        </Typography>
        <Typography variant="h5" component="div">
          {props.taskname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.description}
        </Typography>
        <Typography variant="body2">
        {props.assigned}
        </Typography>
      </CardContent>
      <CardActions>

        <label className={styles.label} size="small" >Done
        <input className={styles.input} type="checkbox" name="chek" value={check} onChange={()=>{setcheck(!check)}} />
        </label>

      </CardActions>

    </Card>
    </form>
    </div>
  );
}
export default BasicCard;