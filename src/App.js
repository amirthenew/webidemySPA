import React  from 'react';
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';
import Landing from './components/Landing';
import { Route ,Routes,Navigate} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import Page404 from './components/Page404';
import ContactUs from './components/ContactUs';


const App = () => {


  return (
    <div>
<Navbar/>
<Routes>
<Route path='/' element={<Landing/>}/>
    <Route path ='/aboutus/*' element={<AboutUs/>}/>
    <Route path="/contactus" element={<ContactUs/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path ='/404' element={<Page404/>}/>
    <Route path ='/*' element={<Navigate to ="/404"/>}/>
</Routes>

<Footer/>
    </div>
    );
}
 
export default App;
