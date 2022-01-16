import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import LandingPage from './component/landingPage'
import Dog from './component/dog'
import Dawg from './component/dawg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dog" element={<Dog />} />
            <Route path="/dawg" element={<Dawg />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
