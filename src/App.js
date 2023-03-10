import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter basename="/Soc-Dio">
        <Routes>
          <Route element=<Navbar />>

            <Route path='/' element=<Home/>/>
            <Route path='/home' element=<Home /> />
            <Route path='/getStarted' element=<GetStarted /> />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
