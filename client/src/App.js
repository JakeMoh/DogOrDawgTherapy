import './App.css';
import OpenAI from 'openai-api';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import LandingPage from './component/landingPage'
import Dog from './component/dog'
import Dawg from './component/dawg'

const OPENAI_API_KEY = "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";

const openai = new OpenAI(OPENAI_API_KEY);

// (async () => {
//   const gptResponse = await openai.complete({
//     engine:"davinci",
//     prompt:"You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:",
//     temperature:0.4,
//     max_tokens:60,
//     top_p:1.0,
//     frequency_penalty:0.5,
//     presence_penalty:0.0,
//     stop:["You:"]
//   });

//   console.log(gptResponse.data);
// })();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/dawg" element={<Dawg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
