import React from 'react';
import axios from 'axios'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = () => {
  const onSuccess = async (response) => {

    console.log(response.credential);
    console.log("got token");
    try {
      const res = await axios.post('http://localhost:4000/api/v1/auth/google', {
        token: response.credential,
      }, );
      console.log('Backend response:', res.data);
    } catch (error) {
      console.error('Error sending token to backend:', error);
    }


  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId="wy4rhdyewohfuwheohefhesiflh.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
