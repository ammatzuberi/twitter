
import './App.css';
import Sidebar from './Sidebar';
import { Icon } from '@mui/material';
import Feed from './Feed';
import Widgets from './Widgets';
function App() {
  return (
    <div className="app">
    
    <Sidebar/>
    <Feed/>
    <Icon/>
    <Widgets/>
      
    </div>
  );
}

export default App;
