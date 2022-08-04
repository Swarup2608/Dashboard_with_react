import './App.css';
import { MainContent } from './components/MainContent/MainContent';
import { SideBar } from './components/SideBar/SideBar';
import { TopNavBar } from './components/TopNavBar/TopNavBar';

function App() {
  return (
    <div className='body'>
      <TopNavBar />
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
