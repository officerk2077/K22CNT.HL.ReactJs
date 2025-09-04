import './App.css';
import NtkClassComp from './components/NtkClassComp';
import NtkFuncComp from './components/NtkFuncComp';
import NtkJsXExpression from './components/NtkJsxExpression';

function App() {
  return (
    <div className="container border">
      <h1>Làm việc với các thành phần cơ bản trong Reactjs</h1>
      <hr/>
      <NtkJsXExpression />
      <NtkFuncComp/>
      <NtkFuncComp name="Truc Kien" age="21"></NtkFuncComp>
      <NtkClassComp></NtkClassComp>
      <NtkClassComp fullName="Nguyen Truc Kien" company="Ntk"/>
      <NtkClassComp fullName="Truc Kien" company="K22CNT"/>
    </div>
  );
}

export default App;
