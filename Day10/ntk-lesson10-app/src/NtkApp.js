import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NtkNavBar from './components/NtkNavBar';
import NtkHome from './pages/NtkHome';
import NtkStudentInfo from './pages/NtkStudentInfo';
import NtkStudentList from './pages/NtkStudentList';

function NtkApp() {
  return (
    <div className="container border">
      <h1 className='text-center'>Nguyễn Trực Kiên React Hook + Route</h1>
      <hr/>
      <BrowserRouter>
        <NtkNavBar/>
        <Routes>
          <Route path='/' element={<NtkHome/>}/>
          <Route path='/info' element={<NtkStudentInfo/>}/>
          <Route path='/list' element={<NtkStudentList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NtkApp;
