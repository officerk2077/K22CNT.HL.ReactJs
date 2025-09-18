import './App.css';
import NtkExampleContext from './components/NtkExampleContext';
import NtkListStudent from './components/NtkListStudent';
import NtkUseEffectDemo from './components/NtkUseEffectDemo';
import NtkUseState from './components/NtkUseState';

function NtkApp() {
  return (
    <div className="container border">
      <h1>React Hook - Demo [Nguyễn Trực Kiên]</h1>
      {/* <hr/>
      <NtkUseState />
      <NtkListStudent /> */}
      {/* <hr/> 
      <NtkUseEffectDemo/> */}
      <hr/>
      <NtkExampleContext/>
    </div>
  );
}

export default NtkApp;
