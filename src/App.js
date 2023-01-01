import logo from './logo.svg';
import './App.css'
import LeftPart from './component/left_part/LeftPart';
import RightPart from './component/right_part/RightPart';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App min-h-screen" >
      <div className='w-9/12'>
        <LeftPart />
      </div>
      <div className='w-3/12'>
        <RightPart />
      </div>
    </div>
  );
}

export default App;
