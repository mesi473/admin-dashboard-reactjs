
import './App.css';
import MainArea from './components/dashboard-main-area/MainArea';
import SidebarLeft from './components/sidebar-left/Sidebar';
import SidebarRight from './components/sidebar-right/Sidebar';
function App() {
  return (
    <div className="dashbaord">
      <SidebarLeft/> 
      <MainArea/>
      <SidebarRight/>
    </div>
  );
}

export default App;
