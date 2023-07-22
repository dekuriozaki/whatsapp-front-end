import React, { useState } from 'react';
import './Form.css';

const LoginForm = ({ toggleForm,login }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="box" onSubmit={() => login(mobile,password)}>
      <h2>Login</h2>
      <div className="form-group">
        <label className="signInLabel" >Mobile:</label>
        <input type="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="signInLabel">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button className="logInButton" type="submit">Login</button>
      <p className='logInInfo'>Don't have an account? <span className='logIn' onClick={toggleForm}>Signup</span></p>
    </form>
  );
};

export default LoginForm;
