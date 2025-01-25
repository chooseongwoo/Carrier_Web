import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/styles/global.css';
import App from 'app/App';
import ReactQueryProviders from 'app/providers/react-query-provider';

createRoot(document.getElementById('root')!).render(
  <ReactQueryProviders>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactQueryProviders>
);
