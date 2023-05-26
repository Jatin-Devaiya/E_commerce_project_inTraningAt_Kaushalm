import React from 'react'
import './loginform.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
   <form action="action_page.php" method="post" className='form'>
  <div className="logincontainer">
    {/* <img src="img_avatar2.png" alt="Avatar" className="avatar" /> */}
    <h3>Login</h3>
  </div>
  <div className="container">
    <label htmlFor="uname"><b>Username</b></label>
    <input className='input' type="text" placeholder="Enter Username" name="uname" required />
    <label htmlFor="psw"><b>Password</b></label>
    <input className='input' type="password" placeholder="Enter Password" name="psw" required />
    <button type="submit" className='button'>Login</button>
    <label>
      <input className='input' type="checkbox" defaultChecked="checked" name="remember" /> Remember me
    </label>
  </div>
  <div className="container" style={{backgroundColor: '#f1f1f1'}}>
    <button type="button" className="cancelbtn button"><Link to="/" className='link'>Cancel</Link></button>
    <span className="psw span">Forgot <a href="#">password?</a></span>
    <span className="psw span">If you have not Account : <Link to="/registrationpage">Create Account</Link>--</span>
  </div>
</form>

    </>
  )
}

export default LoginPage