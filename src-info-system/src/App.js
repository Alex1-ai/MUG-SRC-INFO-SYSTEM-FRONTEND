import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter as Router ,
  Routes, Route, 
  // Link, 
  // useParams,
  useNavigate,
  
  Navigate
} from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import News from "./pages/News";
import Timetable from "./pages/activitiesPages/Timetable";

function App() {
  const user=true;
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={ <Home /> }/>
        <Route  path="/dashboard" element={<Dashboard />}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact />}/>
        <Route  path="/login" element={user? <Navigate to="/"/> :  <Login />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/news" element={<News />}/>
        <Route path="/timetable" element={<Timetable/>} />
        
         
      </Routes>
    </Router>
  );
}

export default App;
