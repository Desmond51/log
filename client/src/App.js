import RightSidebar from '../src/components/RightSidebar.js';
import LeftSidebar from '../src/components/LeftSidebar.js';
import MiddleSidebar from '../src/components/MiddleSidebar.js';
import './App.css';

function App() {
  return (
    <div className="row">
    <div className='col col-2'> 
      <LeftSidebar />
      </div>
      <div className='col col-6'> 
      <MiddleSidebar />
      </div>
      <div className='col col-4'>
      <RightSidebar />
      </div>
      
    </div>
  );
}

export default App;
