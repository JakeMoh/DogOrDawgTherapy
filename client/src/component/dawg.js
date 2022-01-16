import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, TextField, Button, Container, Grid } from '@mui/material';

const hostName = "https://dog-or-dawg-therapy.herokuapp.com/";
// const hostName = "http://localhost:3001";

const useStyles = makeStyles({
  textField: {
    width: "120vh",
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5vh"
  },
  container: {
    background: '#DBF3FA',
  }
})

function Dawg() {
  const classes = useStyles();
  const [inputMsg, setInputMsg] = useState("");
  const [outputMsg, setOutputMsg] = useState("Hey!");

  const handleClickOutputMsg = () => {
    fetch(hostName + '/api/dawg', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ input: inputMsg}), // Use your own property name / key
    })
      .then((res) => res.json())
      .then((result) => setOutputMsg(result.outputMsg))
      .catch((err) => console.log('error' + err))
  }

  const handleTypeInputMsg = (event) => {
    setInputMsg(event.target.value);
  };

  return (
    <Container className={classes.container}>
      <Grid className={classes.center}>
        <Avatar alt="UBC" src={`${process.env.PUBLIC_URL}/dawg.png`} sx={{width: "40vh", height: "40vh"}} />
        <TextField id="outlined-basic" label="Message" InputProps={{readOnly: true}} value={outputMsg} multiline={true} >
          asdf
        </TextField>
        {/* <Typography>{outputMsg}Hi</Typography> */}
      </Grid>
      <div>
        <TextField className={classes.textField} label="Message" variant="outlined" onChange={handleTypeInputMsg} />
      </div>
      <br/>
      <Button variant="contained" onClick={handleClickOutputMsg}>Send</Button>
    </Container>
  )
}

export default Dawg;
