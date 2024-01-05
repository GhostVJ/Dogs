import {Route, BrowserRouter, Switch} from "react-router-dom";

import './App.css';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Form from './pages/form/form';
import LandingPage from "./pages/landing/landing";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home}/>
      <Route path="/home/:id" component={Detail}/>
      <Route path="/form" component={Form}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
