import './App.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import {  Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Posts from './Pages/Posts';
function App() {
  return (
    <> 

<Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/posts' element={<Posts/>} />
        </Routes>
</Layout>
    

    </>
  );
}

export default App;
