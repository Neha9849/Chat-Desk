
import React from 'react';
import {BsChatQuote} from "react-icons/bs"
import './LoadingPage.css';
import { CircularProgress,Skeleton} from '@mui/material';
const LoadingPage=()=> {
    return (
        <div className="container">
            <div className="iconBox iconAni">
            <BsChatQuote className="msgIcon "/>
            </div>
           <div>
           <h1 className="m-2 text-center">ChatDesk</h1>
           </div>
        </div>
    )
}
export default LoadingPage;