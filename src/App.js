import {useEffect} from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../src/components/home';

function App() {
  useEffect(() => {
    document.title = "Nikko AM"
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
