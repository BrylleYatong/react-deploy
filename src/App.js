
import './App.css';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import Signout from './pages/Signout';
import {Routes, Route} from 'react-router-dom';
import './Dash.css';
import './Signout.css';



function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/singout" element={<Signout/>} />
        </Routes>
    </div>
  );
}

export default App;
