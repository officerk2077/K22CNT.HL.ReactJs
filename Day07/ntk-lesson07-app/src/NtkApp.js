import './App.css';
import NtkListStudent from './components/NtkListStudent';
import NtkUseState from './components/NtkUseState';

function NtkApp() {
  return (
    <div className="container border">
      <h1>React Hook - Demo [Nguyễn Trực Kiên]</h1>
      <hr/>

      <NtkUseState />

      <NtkListStudent />
    </div>
  );
}

export default NtkApp;
