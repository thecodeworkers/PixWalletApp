import React from 'react';
import Home from '../Home';
import Onboarding from '../Onboarding';

const Main = ({ theme }: any) => {
  const isAuth = true;

  return (
    <>
      { isAuth ? <Home theme={theme} /> : <Onboarding /> }
    </>
  );
}

export default Main;
