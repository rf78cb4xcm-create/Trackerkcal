import { StrictMode } from 'react';
<<<<<<< codex/create-landing-page-for-trackerkcal-s12p6d
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
=======
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

createRoot(document.getElementById('root')!).render(
>>>>>>> main
  <StrictMode>
    <App />
  </StrictMode>,
);
