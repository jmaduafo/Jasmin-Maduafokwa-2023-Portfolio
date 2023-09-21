import { useState } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import WorksDisplay from './pages/WorksDisplay/WorksDisplay';
import WrongPage from './pages/WrongPage/WrongPage';
import MainPreloader from './components/MainPreloader/MainPreloader';
import WorkPreloader from './components/WorkPreloader/WorkPreloader';

import { Routes, Route} from 'react-router-dom';

function App() {
  const [preloader, setPreloader] = useState(true)
  const [workPreloader, setWorkPreloader] = useState(true)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exact path='/' element={preloader ? <MainPreloader preloader={preloader} setPreloader={setPreloader}/> : <Home/>}/>
          <Route path='/works/:workTitle' element={workPreloader ? <WorkPreloader workPreloader={workPreloader} setWorkPreloader={setWorkPreloader}/> : <WorksDisplay/>}/>
          <Route path='*' element={<WrongPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
