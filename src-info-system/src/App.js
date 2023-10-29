import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/account/Dashboard";
import EditProfile from "./pages/account/EditProfile";
import Home from "./pages/Home";
import TermsConditions from "./pages/account/TermsConditions";
import { BrowserRouter as Router ,
  Routes, Route, 
  // Link, 
  // useParams,
  useNavigate,
  
  Navigate
} from 'react-router-dom'
import Login from "./pages/account/Authentication/Login";
import Register from "./pages/account/Authentication/Register";
import News from "./pages/News";
import Vote from "./pages/Vote";
import Timetable from "./pages/Timetable";
import Madoh from "./pages/Madoh";
import ChangePassword from "./pages/account/ChangePassword";
// import {EditProfile}/


function App() {
  const user=true;
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={ <Home /> }/>
        <Route path="/timetable" element={<Timetable/>} />
        <Route  path="/dashboard" element={<Dashboard />}/>
        <Route  path="/edit-profile" element={<EditProfile />}/>
        <Route  path="/terms&condition" element={<TermsConditions />}/>
        <Route  path="/change-password" element={<ChangePassword />}/>

        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact />}/>
        <Route  path="/vote" element={<Vote />}/>
        <Route path="/newsId" element={<Madoh/>} />

        {/* <Route  path="/login" element={user? <Navigate to="/"/> :  <Login />}/> */}
        <Route path="/login" element={<Login />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/news" element={<News />}/>
        
         
      </Routes>
    </Router>
  );
}

export default App;
