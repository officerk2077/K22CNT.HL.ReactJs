import './App.css';
import NtkEventComp from './components/NtkEventComp';
import NtkEventCompClass from './components/NtkEventCompClass';
import NtkEventForm1 from './components/NtkEventForm1';
import NtkEventForm2 from './components/NtkEventForm2';

function NtkApp() {
  return (
    <div className="container border">
      <h1 className='text-center'>Nguyễn Trực Kiên <br/>ReactJs - Form - Event</h1>
      <hr/>

      <NtkEventComp/>

      <NtkEventCompClass/>

      <NtkEventForm1/>

      <NtkEventForm2/>

    </div>
  );
}

export default NtkApp;
