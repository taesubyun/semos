import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';
import Crew from './pages/Crew';
import Mysemos from './pages/Mysemos';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Location' element={<Location />}></Route>
                    <Route path='/Crew' element={<Crew />}></Route>
                    <Route path='/Mysemos' element={<Mysemos />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
