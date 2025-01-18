import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from './Layout';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}
