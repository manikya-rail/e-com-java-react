import './App.css';
import { Index } from './components/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <Routes> {/* Wrap your routes in a <Routes> element */}
          <Route path="/" element={<Index />} /> {/* app = home */}
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
