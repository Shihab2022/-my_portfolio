import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import useProductData from './hook/useProductData';
import About from './Pages/About/About';
import Blog from './Pages/blog/Blog';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Projects/ProjectDetails';
import NavBar from './Pages/sheared/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useState } from 'react';

export const ProductContext=createContext({})

function App() {
  const [theme,setTheme]=useState(true)
  const projects=useProductData()
  AOS.init({
    offset: 400, 
    duration: 800, 
  });
  return (
    <div data-theme={theme ?"dark" : "light"}>
      <NavBar theme={theme} setTheme={setTheme}></NavBar>
      <ProductContext.Provider value={projects}>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/home/:id' element={<ProjectDetails/>}></Route>
     </Routes>
     </ProductContext.Provider>
    </div>
  );
}

export default App;
