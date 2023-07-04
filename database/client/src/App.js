import React from "react";
import { BrowserRouter  as  Router, Route, Switch} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";


function App(){
  return(
    <Reuter>
  <div className="app">
   
    <Sidebar/>
    
    <Route exact path="/" component={MainPage}/>
    <Switch/>
  
  </div>


  )
}