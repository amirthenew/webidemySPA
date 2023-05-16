import React,{Component}from 'react';
import Banner from './Banner';
import Cards from './Cards'
import Search from './Search';
import Logos from './Logos';
import Profile from './Profile';
import Colors from './Colors';
const Landing=()=>{

    return (
        <div>
            <Banner/>
            <Logos/>
            <Search/>
            <Profile/>
            <Cards/>
            <Colors/>
        </div>)
} 
export default Landing

