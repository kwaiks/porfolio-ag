import React from 'react';
import '../App.css';
import Header from './fixed/header';

const Layout = ({component:Component})=>{
    return(
        <div>
            <Header/>
            <Component/>
        </div>
    );
}

export default Layout;