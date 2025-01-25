import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import Login from 'pages/Login';
import Home from 'pages/Home';
import Survey from 'pages/Survey';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/survey" element={<Survey />}></Route>
    </Routes>
  );
}
