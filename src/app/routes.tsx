import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import Login from 'pages/Login';
import Home from 'pages/Home';
import Survey from 'pages/Survey';
import OAuth from 'pages/OAuth';
import Email from 'pages/Email';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mail" element={<Email />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/google/callback" element={<OAuth />} />
    </Routes>
  );
}
