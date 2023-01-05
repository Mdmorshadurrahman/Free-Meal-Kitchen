import logo from './logo.svg';
import './App.css'
import LeftPart from './component/left_part/LeftPart';
import RightPart from './component/right_part/RightPart';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App min-h-screen" >
      <LeftPart />
      <div id='bua'>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal bg-black">
          <div className="modal-box relative bg-green-400 text-white" >
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Congratulations!</h3>
            <p className="py-4">Enjoy your meal & all credit goes to Almighty ALLAH!</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
