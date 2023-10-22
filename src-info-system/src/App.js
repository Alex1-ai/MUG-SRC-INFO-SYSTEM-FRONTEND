import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/account/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter as Router ,
  Routes, Route, 
  // Link, 
  // useParams,
  useNavigate,
  
  Navigate
} from 'react-router-dom'
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import News from "./pages/News";
import Vote from "./pages/Vote";

function App() {
  const user=true;
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={ <Home /> }/>
        <Route  path="/dashboard" element={<Dashboard />}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact />}/>
        <Route  path="/vote" element={<Vote />}/>

        <Route  path="/login" element={user? <Navigate to="/"/> :  <Login />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/news" element={<News />}/>
        
         
      </Routes>
    </Router>
  );
}

export default App;
