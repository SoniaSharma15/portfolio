
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

import Error from './pages/Error'
import Certipage from './components/Certipage';
import MyMap from './MyMap';
import Login from './components/fire/Login';
import Signup from './components/fire/Signup';


function App() {
return(<>
<BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/certificate' element={<Certipage/>}/>
    <Route path='/service' element={<Services/>}/>
    <Route path='/login' element={<Login  />}/>
    <Route path='/signup' element={<Signup  />}/>
    <Route path='/mymap' element={<MyMap/>}/>
    <Route path='*' element={<Error/>}/>
    


  </Routes>

</BrowserRouter>
   
</>
  )
}

export default App
