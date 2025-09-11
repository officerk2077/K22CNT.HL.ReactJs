import './App.css';
import Event1Comp from './components/Event1Comp';
import Event2Comp from './components/Event2Comp';
import Event3Comp from './components/Event3Comp';
import Event4Comp from './components/Event4Comp';
import Event5Comp from './components/Event5Comp';
import FormComp1 from './components/FormComp1';
import FormComp2 from './components/FormComp2';

function NtkApp() {
  return (
    <div className="container border">
      <h1>Nguyễn Trực Kiên</h1>
      <h2>EVENT – FORM – LIST&KEY - RENDER CÓ ĐIỀU KIỆN</h2>
      {/* <hr/>
      <Event1Comp/>
      <hr/>
      <Event2Comp/>
      <hr/>
      <Event3Comp/>
      <hr/>
      <Event4Comp/>
      <hr/>
      <Event5Comp/>
      <hr/>
      <FormComp1/> */}
      <hr/>
      <FormComp2/>
    </div>
  );
}

export default NtkApp;
