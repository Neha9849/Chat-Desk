import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import './Home.css'
const Home = () => {
    return (
        <>
        <div className="homeContainer">
         <Sidebar/>
         <Body/>
         {/* <Navbar/> */}
        </div>
        </>
    )
}

export default Home;