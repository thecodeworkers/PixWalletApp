import React from 'react';
import Home from '../Home';
import Onboarding from '../Onboarding';
import MainNavigation from '../../navigations';

const Main = () => {
  const isAuth = true;

  return (
    <>
      {
        isAuth ? <MainNavigation/> : <Onboarding/>
      }
    </>
  );
}

export default Main;
