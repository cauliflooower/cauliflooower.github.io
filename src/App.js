import './App.css';
import state from './redux/state';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './component/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="all-wrapper">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/message' element={<DialogsContainer
              store = {props.store}/>}/>
              <Route path='/profile' element={<Profile 
              store = {props.store}/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
