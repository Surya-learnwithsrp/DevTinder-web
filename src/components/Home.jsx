import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import Footer from './Footer';
import { setUser } from '../store/userSlice';
import { BASE_URL } from '../constants';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);


  const fetchUser = async() => {
    if(userData) return;
    try {
      const res = await axios.get(`${BASE_URL}/profile`, { withCredentials: true });
      dispatch(setUser(res.data?.user));
    } catch (error) {
      if (error.status === 401) {
        navigate('/login');
      }
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Home;