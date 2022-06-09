import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
     <h1 className='text-4xl  text-primary'>hello</h1>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
