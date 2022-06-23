import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import useProductData from './hook/useProductData';
import About from './Pages/About/About';
import HomeAbout from './Pages/About/HomeAbout';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Projects/ProjectDetails';
import NavBar from './Pages/sheared/NavBar';

export const ProductContext=createContext({})

function App() {
  const projects=useProductData()

  return (
    <div>
      <NavBar/>
      <ProductContext.Provider value={projects}>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/homeAbout' element={<HomeAbout/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/home/:id' element={<ProjectDetails/>}></Route>
     </Routes>
     </ProductContext.Provider>
    </div>
  );
}

export default App;
