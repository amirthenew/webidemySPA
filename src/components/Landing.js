import React,{Component}from 'react';
import Banner from './Banner';
import Cards from './Cards'
import Search from './Search';
import Logos from './Logos';
import Profile from './Profile';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
        <div>
            <Banner/>
            <Logos/>
            <Search/>
            <Profile/>
            <Cards/>
        </div>);
        
    }
}
 
export default Landing;
