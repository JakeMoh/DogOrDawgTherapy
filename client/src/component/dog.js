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

function Dog() {
  const classes = useStyles();
  const [inputMsg, setInputMsg] = useState("");
  const [outputMsg, setOutputMsg] = useState("Hey!");


  const handleClickOutputMsg = () => {
    fetch(hostName + '/api/dog', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ input: inputMsg}), // Use your own property name / key
    })
      .then((res) => res.json())
      .then((result) => setOutputMsg(result.outputMsg))
      .catch((err) => console.log('error' + err))
  }

  // const handleClickOutputMsg = () => {
  //   (async () => {
  //     const gptResponse = await openai.complete({
  //       engine: 'davinci',
  //       prompt:`You: ${inputMsg}\nFriend:`,
  //       temperature:0.01,
  //       max_tokens:60,
  //       top_p:0.3,
  //       frequency_penalty:0.5,
  //       presence_penalty:0.0,
  //       stop:["You:"]
  //   });
    
  //     console.log(gptResponse.data);
  //     setOutputMsg(gptResponse.data.choices[0].text);
  //   })();
  // };

  const handleTypeInputMsg = (event) => {
    setInputMsg(event.target.value);
  };

  return (
    <Container className={classes.container}>
      <Grid className={classes.center}>
        <Avatar alt="UBC" src={`${process.env.PUBLIC_URL}/dog.png`} sx={{width: "40vh", height: "40vh"}} />
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

export default Dog;