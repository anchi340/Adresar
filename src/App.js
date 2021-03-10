
import Adresar from './components/Adresar';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Kontakt from './components/Kontakt'; 





function App() {
  return (
    
     <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adresar" component={Adresar} />
        <Route exact path="/kontakt" component={Kontakt} />
        
      </Router>
     
    
  );
  
  
}

export default App;
