import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Register from './screens/Register';
import FlashScreen from './screens/FlashScreen';

const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='FlashScreen' component={FlashScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
      <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;