import { useState, useEffect } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import WorksDisplay from './pages/WorksDisplay/WorksDisplay';
import WrongPage from './pages/WrongPage/WrongPage';
import MainPreloader from './components/MainPreloader/MainPreloader';
import { Routes, Route} from 'react-router-dom';
import { LayoutGroup } from 'framer-motion';

function App() {
  const [preloader, setPreloader] = useState(true)
  return (
    <div className="App">
      <Navbar/>
      <LayoutGroup>
      <Routes>
          <Route exact path='/' element={preloader ? <MainPreloader preloader={preloader} setPreloader={setPreloader}/> : <Home/>}/>
          <Route path='/works/:workTitle' element={<WorksDisplay/>}/>
          <Route path='/*' element={<WrongPage/>}/>
      </Routes>
      </LayoutGroup>
      <Footer/>
    </div>
  );
}

export default App;
