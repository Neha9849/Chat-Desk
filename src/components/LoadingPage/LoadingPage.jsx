
import React from 'react';
import {BsChatQuote} from "react-icons/bs"
import './LoadingPage.css';
const LoadingPage=()=> {
    return (
        <div className="loadingPage">
         <div className="container">
            <div className="iconBox iconAni" className="iconAni iconBox" >
            <BsChatQuote className="msgIcon"/>
            </div>
           <div>
           <h1 className="m-2 text-center">ChatDesk</h1>
           </div>
        </div>
        </div>
       
    )
}
export default LoadingPage;