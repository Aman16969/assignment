
import './App.css';
import Navbar from './NavComponent/Navbar';
import { Auth } from './pages/Auth';
function App() {
  return (
    <div className="App">
      <Auth>
     <Navbar/>
     </Auth>
    </div>
  );
}

export default App;
