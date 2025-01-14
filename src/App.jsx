import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import { current } from './redux/auth/operations';
import { setLoggedIn } from './redux/auth/slice.js';
import { selectToken } from './redux/auth/selectors.js';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const WaterControlPage = lazy(() =>
  import('./pages/WaterControlPage/WaterControlPage.jsx')
);

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(current());
      dispatch(setLoggedIn(true));
    }
  }, [token, dispatch]);

  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo={`/water/${Date.now()}`}
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo={`/water/${Date.now()}`}
              component={<LoginPage />}
            />
          }
        />

        <Route
          path="/water/:date"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<WaterControlPage />}
            />
          }
        ></Route>

        <Route path="*" element={<div>NotFoundPage </div>} />
      </Routes>
    </SharedLayout>
  );
}
export default App;
