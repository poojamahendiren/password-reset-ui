import './App.css';
import { Route, Routes, useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import { Login } from "./pages/Login";
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { PasswordReset } from './pages/passwordReset';
import { Page404 } from './pages/Page404';
import { Users } from './pages/Users';
import { Loader } from './components/loadingComponent/loader';
import { Verified } from "./components/loadingComponent/verified"


function App() {

  // useEffect(()=>{
  //   if(window.location.href === "https://authentication-work-by-rv.netlify.app/login"){
  //     window.location.href = "https://authentication-by-rv.herokuapp.com"
  //   }
  // },[])
  // console.log(window.location.href);

const [loading,setLoading] = useState(false);
const [verified,setVerified] = useState(false);
const navigate = useNavigate();

  return (
    <div className="App">
      <div className='Image'>
         <h1 className='motto'>ITS all about SECURITY</h1>
      </div>
      <div className='page'>
      
         <Routes>
         
           <Route  path="/" element={<Login/>}/>
             

           <Route  path="/users" element={ <Users/>}/>  
              
           

           <Route exact path="/login"  render={(verified)? <Verified/> :(loading) ? <Loader/> :""} element={<Login setVerified={setVerified} setLoading={setLoading}/>}/>
              
              
           

           <Route exact path="/signup" render={(verified)? <Verified/> :(loading) ? <Loader/> :""} element={<SignUp setVerified={setVerified} setLoading={setLoading}/>}/>
                
              
           

           <Route exact path="/forgot_Password"  render={(verified)? <Verified/> :(loading) ? <Loader/> :""}element={<ForgotPassword setVerified={setVerified} setLoading={setLoading}/>}/>
                
               
           

           <Route  path="/password_Reset/" element={<Login/>}/>
              

           <Route path="/password_Reset/:id" element={<PasswordReset setVerified={setVerified} setLoading={setLoading}/>}/>
                {/* {(verified)? <Verified/> :(loading) ? <Loader/> :""} */}
                
           <Route path="**" element={<Page404/>} />
                
           

         </Routes>
      </div>
    </div>
  );
}

//<Route path="/" element={<Main/>}/>


export default App;
