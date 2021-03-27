
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginPage from './Components/LoginPage';
import Signup from './Components/Signup';
import React from 'react'
import Home from './Components/Home';
import Header from './Components/Headerone';
import { useState,useEffect } from 'react';
import axios from 'axios'


import "bootstrap/dist/css/bootstrap.min.css";
import SavedProduct from './Components/SavedProduct';
import { useStateValue } from './Components/StateProvider';
import AddBlogs from './Components/AddBlogs';
import { MainData } from './Components/Action';

function App() {
  const[{},dispatch]=useStateValue()
  const [Vali, setVali] = useState(false)

  const[searchdata,setsearchdata]=useState('')
  useEffect(() => {
    axios
      .get(
        // "https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=AIzaSyBHXr0ffuxuK1-W5FS86GAR_wz1qSzH0hY"
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=baa8b037748543e3a6aa39e6c7b9eb79"
      )
      .then((data) => {
       
       
        // dispatch({ type: "MAIN_DATA", item: data});
        // dispatch({ type: "MAIN_DATA", item: data.data.articles});
        dispatch(MainData(data.data.articles))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
  
  return (
    
    <Router>
    <div className="App">
      <Switch>
      
        <Route path="/Login">

          <LoginPage setsearchdata={setsearchdata} Vali={Vali} setVali={setVali} />
        </Route>
        <Route path="/Signup">
          <Signup/>
        </Route>
        <Route path='/Saved'>
          <Header searchdata={searchdata} setsearchdata={setsearchdata}  Vali={Vali} setVali={setVali}/>
          <SavedProduct searchdata={searchdata}  Vali={Vali}/>

        </Route>
        <Route path="/AddBlogs"> 
       
        <AddBlogs Vali={Vali}/>

        </Route>
        <Route path="/">
       
          <Header searchdata={searchdata} setsearchdata={setsearchdata}  Vali={Vali} setVali={setVali}/>
        <Home searchdata={searchdata} setsearchdata={setsearchdata}  Vali={Vali}/>
          
          
        </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
