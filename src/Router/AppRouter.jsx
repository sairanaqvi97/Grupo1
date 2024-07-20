import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../pages/Navbar';
import { HomePage, DashboardPage, Login, Register,} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route
            path='dashboard'
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
