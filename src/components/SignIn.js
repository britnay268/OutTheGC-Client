/* eslint-disable react/button-has-type */
import React from 'react';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <button className="btn btn-neutral" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
