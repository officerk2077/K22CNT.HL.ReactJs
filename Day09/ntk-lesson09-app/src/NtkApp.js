import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NtkNavBar from './components/NtkNavBar';
import NtkHome from './pages/NtkHome';
import NtkAbout from './pages/NtkAbout'; 
import NtkContact from './pages/NtkContact'
import NtkProduct from './pages/NtkProduct'
import NtkProductDetail from './pages/NtkProductDetail'
import Ntk404 from './pages/Ntk404'

export default function NtkApp() {
  return (
    <div className="container border">
      <h1>React router - Demo [Nguyễn Trực Kiên]</h1>
      <hr/>
      <BrowserRouter>
        <NtkNavBar/>
        <Routes>
          <Route path='/' element={<NtkHome />}/>
          <Route path='/about' element={<NtkAbout />}/>
          <Route path='/contact' element={<NtkContact/>}/>

          {/* Nested route */}
          <Route path='/product' element={<NtkProduct/>}>
            <Route path=":id" element={<NtkProductDetail/>}/>
          </Route>

          {/* 404 page */}
          <Route path='*' element={<Ntk404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
