import { View, Text,Alert } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Button } from 'native-base'

export default function Register({navigation}) {
  const loginButtonOnPress =()=>{
    navigation.navigate('Login')
  }
  return (
      <NativeBaseProvider>
      <Text>Register</Text>
      <Button size="sm" variant="outline" colorScheme="secondary" onPress={loginButtonOnPress}>
            SECONDARY
          </Button> 
    </NativeBaseProvider>
  
  )
}