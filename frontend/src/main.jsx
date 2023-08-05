import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AuthContextProvider from './contexts/AuthContext';
import { WorkoutsContextProvider } from './contexts/WorkoutContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <WorkoutsContextProvider>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </WorkoutsContextProvider>
  </AuthContextProvider>
);
