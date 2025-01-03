import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo={`/water/${Date.now()}`}
              component={<div>RegisterPage</div>}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo={`/water/${Date.now()}`}
              component={<div>LoginPage</div>}
            />
          }
        />

        <Route
          path="/water/:date"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<div>WaterControlPage</div>}
            />
          }
        ></Route>

        <Route path="*" element={<div>NotFoundPage </div>} />
      </Routes>
    </SharedLayout>
  );
}
export default App;
