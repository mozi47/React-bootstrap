import React,{ Component } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Detail from './components/pages/Detail';
import NotFound from './components/pages/NotFound';

class App extends Component{
  render(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/notfound" component={NotFound}/>
      </Switch>
      <Footer/>  
    </div>
  );
}
}

export default App;
