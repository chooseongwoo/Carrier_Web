import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Survey from 'pages/Survey';
import OAuth from 'pages/OAuth';
import Mail from 'pages/Mail';
import useUser from 'entities/user/hooks/useUser';

interface RouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: RouteProps) => {
  const { isLoggedIn } = useUser();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const PublicRoute = ({ children }: RouteProps) => {
  const { isLoggedIn } = useUser();
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default function Router() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/mail" element={<Mail />} />
      </Route>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route path="/survey" element={<Survey />} />
      <Route path="/google/callback" element={<OAuth />} />
    </Routes>
  );
}
