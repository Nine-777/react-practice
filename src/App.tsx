import './App.css';
// ---- Components ----
import Home from './pages/Home';
import Post from './pages/Post';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <header>
        <h1>React Practice</h1>
      </header>
      <main>
        <Router basename="/react-practice">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
