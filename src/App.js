import './App.css';
import Attribution from './components/Attribution';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
    <Sidebar/>
    <Navbar/>
    <Homepage/>
    <Attribution/>
    </div>
  );
}

export default App;
