import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Home, NotFound, Dashboard, Submit, Login, Signup, Tokens, Watchlist} from './pages'
import PrivateRouter from './PrivateRouter';

function App() {
  return (
  <>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/Tokens' element={<Tokens />} exact />
        <Route path='/signup' element={<Signup />} exact />
        <Route path='/login' element={<Login />} exact />
        <Route path='/submit' element={<PrivateRouter><Submit /></PrivateRouter>} exact />
        <Route path='/profile' element={<PrivateRouter><Dashboard /></PrivateRouter>} exact />
        <Route path='/watchlist' element={<PrivateRouter><Watchlist /></PrivateRouter>} exact />
        <Route path="*" element={NotFound} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
