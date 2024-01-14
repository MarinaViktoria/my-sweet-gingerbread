import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Shop from './Shop';
import FAQ from './FAQ';
import Contact from './Contact';

function App() {

return <Router>
  <nav>
    <Link to="/" className="link">Главная</Link>
    <Link to="shop" className="link">Пряники</Link>
    <Link to="faq" className="link">Часто задаваемые вопросы</Link>
    <Link to="contact" className="link">Контакт</Link>
  </nav>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
</Router>
}
export default App;
