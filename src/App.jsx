import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

import Home from './components/Home';
import Login from './components/Login';
import Feed from './components/Feed';
import { Profile } from './components/Profile/Profile';


function App() {

  return (
    <Provider store={appStore}>
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<Feed />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
