import React from 'react';
import Home from '../Home';
import Onboarding from '../Onboarding';

const Main = () => {
  const isAuth = true;

  return (
    <>
      { isAuth ? <Home/> : <Onboarding/> }
    </>
  );
}

export default Main;
