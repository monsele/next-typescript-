import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
const CreateTicket = () => {
  return (
    
    <div className={styles.form_container}>
      <form action="/api/form" method="post">
      <div className={styles.form_input}>
        <TextField name="taskname" label="Ticket Name" type="text" required />
      </div>
      <div className={styles.form_input}>
        <TextField name="description" label="Tell Us More About your ticket" type="text" />
      </div>
      <div className={styles.form_input}>
        <TextField name="assignee" label="assignee" type="text"/>
      </div>
      <Button title="Submit" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CreateTicket;