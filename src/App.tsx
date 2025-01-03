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
        <p>
          後続タスクでReactRouterを設定したい。
          <br />
          今は未設定なので「投稿一覧」と「投稿詳細」を同一ページに並べて表示。
        </p>
        <Home />
        <PostList />
        <Post />
      </main>
    </>
  );
}

export default App;
