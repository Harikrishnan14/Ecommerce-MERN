import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login'
import ResetPassword from './pages/ForgotPassword'
import ForgotPassword from './pages/ResetPassword'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<ResetPassword />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<BlogList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
