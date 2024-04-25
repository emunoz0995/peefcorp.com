import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// src/index.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import ProtectedAdminRoutes from './components/protectedRoutes/ProtectedAdminRoutes';
import LandingPage from './containers/landingPage/LandingPage';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import ForgotPassword from './containers/auth/ForgotPassword';
import routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="h-full min-h-screen">
        <Routes>
          <Route element={<ProtectedRoutes />}>
            {
              routes.map(route => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))
            }
          </Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
  )
}

export default App
