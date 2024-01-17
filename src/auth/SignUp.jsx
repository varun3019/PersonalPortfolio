import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './signup.css'

export default function SignUp() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate =useNavigate();

  const handleLogin = () => {
      localStorage.setItem('username', JSON.stringify(user));
      localStorage.setItem('userpass',JSON.stringify(pass))
      alert("SignUp Sucessfull");
      navigate('/signin');
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
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
        <button style={{backgroundColor:"black",color:"whitesmoke",width:"100px"}} type="button" onClick={handleLogin}>
          SignUp
        </button>
      </form>

    </div>
  );
}
