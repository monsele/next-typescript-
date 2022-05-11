import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import data from "../../data";
import { getAllTickets } from "../../lib/tickets";
// interface Ticket {
//   id:number;
//   taskname: string;
//   description: string;
//   assigned: string;
//   assignee: string;
//   done: boolean;
//   team?: string;

// }
// interface getVal{
//   id:string| string[];
// }
export async function getStaticProps({ params }) {
  const postData = data.find(x=>x.id==params.id);
  return{
    props: {
      postData,
    },
  };
}
export async function getStaticPaths(){
    const paths=getAllTickets();
    return {
      paths,
      fallback: false,
    };
}
export default function Detail(props) {
  
  const [ticket, setticket] = useState();
  
  
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {  
    return () => {
      let value=props.postData;
      setticket(value);
    }
  }, [id])

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <h3>{props.postData.taskname}</h3>
      <div>
        <p>{props.postData.description}</p>
        <article><span>Assigned:</span>{props.postData.assigned}</article>
        Reporter:<span>{props.postData.assignee}</span>
        <br />
        <div>Date: 5/10/2022</div>
        <span>Done:{String(props.postData.done)}</span>
        <div>{props.postData.team}</div>
      </div>
    </Box>
  );
}
