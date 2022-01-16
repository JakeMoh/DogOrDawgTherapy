import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, TextField, Button, Container, Grid } from '@mui/material';
import OpenAI from 'openai-api';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);

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
    (async () => {
      const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt:`You: ${inputMsg}\nMarv:`,
        temperature:0.01,
        max_tokens:60,
        top_p:0.3,
        frequency_penalty:0.5,
        presence_penalty:0.0,
        stop:["\nYou"]
    });
    
      console.log(gptResponse.data);
      setOutputMsg(gptResponse.data.choices[0].text);
    })();
  };

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
