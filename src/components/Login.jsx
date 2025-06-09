// Login.js
import React, { useState } from 'react'
import { auth, login, signUp, provider } from '../fireBase/FireBase';
import { signInWithPopup } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  const [signData, setSignData] = useState('Sign in')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user} = props;

  const google = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Optionally navigate after successful Google login
    } catch (err) {
      console.log(err)
    }
  }

  const auth_provider = async (e) => {
    e.preventDefault();
    if (signData === 'Sign in') {
      try {
        await login(email, password);
      } catch (error) {
        console.error(error); // Log to console or show in UI
      }
    } else {
      try {
        await signUp(name, email, password);
      } catch (error) {
        console.error(error); // Log to console or show in UI
      }
    }
  };

  if(user){
    return <Navigate to={'/'} />
  }

  return (
    <div className='form-div'>
      <form className='formm'>
        <h2 style={{ color: 'white' }}>{signData}</h2>
        <div className="mb-3">
          {signData === 'Sign up' ? 
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" placeholder='Username' /> 
            : <></>}
          <br />
          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder='Email...' />
        </div>
        <div className="mb-3">
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password...' className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1" id='rem' style={{ color: 'white' }}>Remember me</label>
        </div>
        <button type="submit" onClick={auth_provider} className="btn btn-primary">{signData}</button>
        {signData === 'Sign in' ? 
          <p className='ptag'>Don't have an account? <span className='spann' onClick={() => { setSignData('Sign up') }}>Sign up.</span></p> 
          : <p className='ptag'>Already have an account! <span className='spann' onClick={() => { setSignData('Sign in') }}>Sign in.</span></p>}
      </form>
    </div>
  )
}

export default Login
