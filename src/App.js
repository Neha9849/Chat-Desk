import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingPage from "./components/LoadingPage/LoadingPage";
import Home from "./components/Home/Home";
import { useState } from "react";
function App() {
  const [loading,setLoading]=useState(false);
  return (
    loading?<LoadingPage/> :  <Home/>
  
  );
}

export default App;
