//import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import MainFooter from './components/MainFooter';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MapApp from './mapapp/MapApp';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <div className="page">
        <Routes>
          <Route index element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Projects' element={<Projects />}>
            <Route path=':project' element={<MapApp />} />
          </Route>
          <Route path='Contact' element={<Contact />} />

        </Routes>
      </div>
      <MainFooter />
    </div>
  );
}

export default App;
