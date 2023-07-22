import React, { useState } from 'react';
import './Form.css';

const SignupForm = ({ toggleForm }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here (e.g., sending data to a backend server)
    console.log('Signed up with mobile:', mobile, 'and password:', password);
  };

  return (
    <form className="box" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div className="form-group">
        <label className="signInLabel">Mobile:</label>
        <input type="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="signInLabel">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button className="signUpButton"  type="submit">Signup</button>
      <p className='signUpInfo'>Already have an account? <span className='signUp' onClick={toggleForm}>Login</span></p>
    </form>
  );
};

export default SignupForm;
