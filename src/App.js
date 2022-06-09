import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Pages/sheared/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
