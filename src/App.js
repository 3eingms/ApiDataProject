import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AllStudent from './component/AllStudent';
import GetStudent from './component/GetStudent';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<AllStudent />} />  
            <Route path='/get/:id' element = {<GetStudent />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
