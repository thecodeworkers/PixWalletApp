import React from 'react';
import Home from '../Home';
import Onboarding from '../Onboarding';
import { SafeAreaView } from 'react-native';

const Main = () => {
  const isAuth = true;

  return (
    <>
      {
        isAuth ? <Home/> : <Onboarding/>
      }
    </>
  );
}

export default Main;
