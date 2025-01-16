import React from 'react';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';
import useAuth from '@/hooks/queries/useAuth';

function Rootnavigator() {
  const {isLogin} = useAuth();
  console.log(`isLogin : ${isLogin}`);
  return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default Rootnavigator;
