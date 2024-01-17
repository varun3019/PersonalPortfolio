import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './signin.css'

const SignIn = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate =useNavigate();
  
    const handleLogin = () => {
        let username = JSON.parse(localStorage.getItem('username'));
        let userpass = JSON.parse(localStorage.getItem('userpass'));
        if(user===username &&pass===userpass)
        {
            alert("SignIn successfull")
            navigate('/portfolio');
        }
        else
        {
            alert("Wrong password or wrong email")
        }
        
    };
  
    return (
      <div>
        <h1>SignIn Page</h1>
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
    )
}

export default SignIn