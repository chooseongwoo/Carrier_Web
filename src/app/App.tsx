import Router from 'app/routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from 'shared/constants';
import { Storage } from 'shared/lib/storage';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.electronAPI?.onDeepLink((data) => {
      if (data.accessToken && data.refreshToken) {
        Storage.setItem(TOKEN.ACCESS, data.accessToken);
        Storage.setItem(TOKEN.REFRESH, data.refreshToken);
      }

      if (data.route) {
        setTimeout(() => {
          window.location.hash = `#${data.route}`;
          window.location.reload();
        }, 100);
      }
    });

    window.electronAPI?.notifyReady();
  }, [navigate]);

  return <Router />;
};

export default App;
