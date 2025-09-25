import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NtkNavBar from './components/NtkNavBar';
import NtkHome from './pages/NtkHome';
import NtkAbout from './pages/NtkAbout'; 
import NtkContact from './pages/NtkContact'
import Ntk404 from './pages/Ntk404'
import NtkUsers from './pages/NtkUsers';
import NtkUserAdd from './pages/NtkUserAdd';
import NtkUserEdit from './pages/NtkUserEdit';
import NtkCar from './pages/NtkCar';

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
          <Route path='/car' element={<NtkCar/>}>
            
          </Route>

          <Route path='/users' element={<NtkUsers/>}> </Route>
          <Route path="/users/add" element={<NtkUserAdd/>}/>
          <Route path="/users/edit/:id" element={<NtkUserEdit/>}/>


          {/* 404 page */}
          <Route path='*' element={<Ntk404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
