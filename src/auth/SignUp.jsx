import React, { useState } from 'react';
import './signup.css';
import {useNavigate} from 'react-router-dom'
import {database} from '../firebaseConfig.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export default function SignUp() {
  const [login,setLogin]=useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e,type) => {
      e.preventDefault();
      const email = user;
      const password = pass;
      if(type==='SignUp')
      {
        createUserWithEmailAndPassword(database,email,password).then(data=>{
        alert("SignUp Successfull");
        navigate("/");
        setLogin(true)
      }).catch(err => console.error("Sign-up error:", err.code, err.message));
      }
      else
      {
       signInWithEmailAndPassword(database,email,password).then(data=>{ alert("SignIn Successfull");
       navigate("/portfolio")}).
       catch(err => console.error("Sign in error:", err.code, err.message));
      }
      }

    const  handleReset = ()=>
      {
        navigate('/reset');  
      }
  return (
    <div>
      <div className='row'>
        <div className={login== false ?'activeColor':'pointer'} onClick={()=>setLogin(false)}>Signup</div>
        <div className={login== true ?'activeColor':'pointer'} onClick={()=>setLogin(true)}>Signin</div>
      </div>
      <h1>{login?'SignIn':'SignUp'}</h1>
      <form onSubmit={(e)=>handleLogin(e,login?"SignIn":"SignUp")}>
        <input
          type="email"
          placeholder="Email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="*******"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <br />
        <p onClick={handleReset}>Forgot Password?</p>
        <button style={{backgroundColor:"black",color:"whitesmoke",width:"100px"}} type="submit" >
        {login?'SignIn':'SignUp'}
        </button>
      </form>
    </div>
  )
}

