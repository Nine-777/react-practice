import './App.css';
// ---- Components ----
import Home from './pages/Home';
import Post from './pages/Post';
import PostList from './pages/PostList.tsx';

function App() {
  return (
    <>
      <header>
        <h1>React Practice</h1>
      </header>
      <main>
        <Home />
        <PostList />
        <Post />
      </main>
    </>
  );
}

export default App;
