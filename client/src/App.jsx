import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/website-pages/Home';
import Register from './pages/website-pages/Register';
import Login from './pages/website-pages/Login';
import RequireAuth from './components/auth/RequireAuth';
import Logout from './pages/website-pages/Logout';
import UserProfile from './pages/user-profile-pages/UserProfile';
import AdminPage from './pages/admin-pages/AdminPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path='/logout' element={<Logout />} />
          <Route path='/user/profile' element={<UserProfile />} />
          <Route path='/admin' element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
