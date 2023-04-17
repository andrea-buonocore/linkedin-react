import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './components/profilePage/ProfilePage';
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomNavbar/>
      <Routes>
        <Route path={'/'} element={<ProfilePage/>}/>        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
