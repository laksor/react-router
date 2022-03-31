import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import FriendDetails from './Components/FriendDetail/FriendDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='friends' element={<Friends />}></Route>
        <Route path='/friend/:friendId' element={<FriendDetails></FriendDetails>}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
