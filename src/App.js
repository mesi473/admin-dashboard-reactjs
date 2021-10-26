
import './App.css';
import MainArea from './components/dashboard-main-area/MainArea';
import Sidebar from './components/sidebar-left/Sidebar';

function App() {
  return (
    <div className="dashbaord">
      <Sidebar/> 
      <MainArea/>
    </div>
  );
}

export default App;
