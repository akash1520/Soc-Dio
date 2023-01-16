import { Route, Routes } from 'react-router-dom';
import './App.css';
import GetStarted from './components/GetStarted';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Support from './components/Support';

function App() {
  return (
    <div>
      <Routes>
        <Route element=<Navbar/>>
            <Route path='/' element=<Support/>/>
            <Route path='/support' element=<Support/>/>
            <Route path='/home' element=<Home/>/>
            <Route path='/getStarted' element=<GetStarted/>/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
