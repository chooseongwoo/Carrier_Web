import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { Suspense, memo } from 'react';
import Layout from './Layout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Survey from 'pages/Survey';
import { OAuthApp, OAuthWeb } from 'pages/OAuth';
import Mail from 'pages/Mail';
import useUser from 'features/user/hooks/useUser';
import Diary from 'pages/Diary';
import { DotLoader } from 'react-spinners';
import theme from 'shared/styles/theme.css';
import Setting from 'pages/Setting';
import Privacy from 'pages/Privacy/page';
import Proceed from 'pages/Proceed';

const LoadingScreen = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <DotLoader color={theme.blue[500]} />
  </div>
);

const PrivateRoute = memo(
  ({ isLoggedIn, isLoading }: { isLoggedIn: boolean; isLoading: boolean }) => {
    if (isLoading) return <LoadingScreen />;
    if (!isLoggedIn) return <Navigate to="/login" replace />;
    return <Outlet />;
  }
);

const PublicRoute = memo(
  ({ isLoggedIn, isLoading }: { isLoggedIn: boolean; isLoading: boolean }) => {
    if (isLoading) return <LoadingScreen />;
    if (isLoggedIn) return <Navigate to="/" replace />;
    return <Outlet />;
  }
);

const SurveyRoute = memo(({ isSurvey }: { isSurvey: boolean }) => {
  if (isSurvey) return <Navigate to="/" replace />;
  return <Outlet />;
});

export default function Router() {
  const { isLoggedIn, isLoading, user } = useUser();
  const { isSurvey } = user;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} isLoading={isLoading} />
          }
        >
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/proceed" element={<Proceed />} />
          </Route>
        </Route>

        <Route
          element={
            <PublicRoute isLoggedIn={isLoggedIn} isLoading={isLoading} />
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/google/callback" element={<OAuthWeb />} />
        </Route>
        <Route element={<SurveyRoute isSurvey={isSurvey} />}>
          <Route path="/app/google/callback" element={<OAuthApp />} />
          <Route path="/survey" element={<Survey />} />
        </Route>
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Suspense>
  );
}
