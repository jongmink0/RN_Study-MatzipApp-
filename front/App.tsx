import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import Rootnavigator from './src/navigations/root/RootNavigator';
import queryClient from './src/api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Rootnavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
