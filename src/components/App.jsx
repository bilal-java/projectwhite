

import React, {Component} from 'react';
import Nav from "./Nav";

import Footer from "./Footer";
import Home from "./Home"; 

import {Route} from "react-router-dom";


class App extends Component {

        render(){
        
        return(<div>
            <Nav />
            <Route  exact path="/" component={Home}/ >
            
            <Footer /> 
            
            
             </div>)
  
        
        
         };
};

export default App;