import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TweetPage from './pages/TweetPage/TweetPage';
import { RestrictedRoute } from '../src/utils/RestrictedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetPage />} />
        <Route path="*" element={<RestrictedRoute redirectTo="/" />} />
      </Routes>
    </>
  );
}

export default App;
