import { Outlet } from 'react-router-dom';
import NavigationBar from 'widgets/NavigationBar';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <NavigationBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
