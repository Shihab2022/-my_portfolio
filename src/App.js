import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Projects/ProjectDetails';
import NavBar from './Pages/sheared/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/projectDetails/:id' element={<ProjectDetails/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
