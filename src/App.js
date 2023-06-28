import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CardPage from './pages/CardPage/CardPage';
import { RestrictedRoute } from '../src/utils/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refresh } from '../src/redux/auth/authOperations';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="*" element={<RestrictedRoute redirectTo="/" />} />
      </Routes>
    </>
  );
}

export default App;
