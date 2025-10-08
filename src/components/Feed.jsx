import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFeedData } from '../store/feedSlice';
import UserCard from './UserCard/UserCard';
import { UserCardLoading } from './UserCard/UserCardLoading';
import { BASE_URL } from '../constants';

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((state) => state.feed);

  const fetchFeed = async() => {
    if(feedData) return;
     try {
      const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
      dispatch(getFeedData(res.data?.feedusers));
     } catch (error) {
        console.error(error);
     }
  }

  useEffect(() => {
    fetchFeed();
  }, []);

  if (!feedData) {
    return <UserCardLoading />;
  }

  return (
    <>
      {feedData.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  )
}

export default Feed;