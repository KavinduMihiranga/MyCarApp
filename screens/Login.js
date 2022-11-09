import { View, Text, Alert, StyleSheet, SafeAreaView, Animated} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { NativeBaseProvider, Button, Input, Checkbox, HStack, Image, Box, ScrollView, TextField } from 'native-base'



export default function Login({navigation}) {
  
  const registerButtonOnPress =()=>{
    navigation.navigate('Register')
  }

 
  return (
   <NativeBaseProvider>
    <SafeAreaView style = {styles.context}> 

    
  
    <Image 
      style ={styles.img}
      alt={'images'}
      source={require('../assets/images/car.png')}
    />

<Image 
   style ={styles.img2}
   alt={'images'}
   source={require('../assets/images/mycar2.png')}
   />

    
    <Box style={styles.box}>

   
    <ScrollView>

    
      <Text style ={styles.textHeading}>Login</Text>
      <Text style ={styles.textDescript}>Welcome To My Car Please Login To Your Account</Text>

      
      <TextField placeholder='username' style ={styles.input} mt={'16'} borderRadius={10}/>
      <TextField placeholder='password' style ={styles.input} mt={'1.5'} borderRadius={10}/>
     

      <Button style={styles.btn} size="lg" variant='solid' onPress={registerButtonOnPress} mt={'15'}>
            Login
          </Button> 
   
    <Text style={styles.textDescript2}>Forgot password ?</Text>


   
      </ScrollView>

          
    </Box>
    <Box style={styles.box2}>
      <Text style={styles.textDescript3}>Don't have an accuont ?</Text>
      <Text style={styles.textDescript4}>Register</Text>
    </Box>
    

    </SafeAreaView>
       
   </NativeBaseProvider>
    
   
  )
}

const styles = StyleSheet.create({
  context:{
    backgroundColor : '#010818',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img :{
    width : "300%",
    height : "100%",
    resizeMode:'cover',
    opacity:0.1,
   
  },

  img2:{
    width : "20%",
    height : "5%",
    resizeMode:'cover',
    position:'absolute',
    top:'0%',
   
   
  },
  input:{
    color : '#76F1FE',
    position:'relative',
   
    
  },  
  textLogo:{
    color: "white",
    fontSize :32,
    position:'absolute',
    justifyContent:'center',
    top:'5%'
  
  },
  textHeading:{
    color: "white",
    fontSize:64,
    fontFamily:'ubuntu',
    fontWeight:'bold',
    marginTop:'5%'
  },
  textDescript:{
    color: "white"
  },
  textDescript2:{
    color: "white",
    position:'absolute',
    top:'80%',
    left:'25%'

  },
  textDescript3:{
    color: "white",
    position:'absolute',
    top:'5%',

  },
  textDescript4:{
    color: "white",
    position:'absolute',
    top:'6%',

  },
  btn:{
    width:"75%",
    borderRadius:10,
    position:'relative',
    alignItems:'center',
    justifyContent:'center',
    fontSize:64,
    left:"13%",
   
    
  },
  box:{
    flex:1,
    position:'absolute',
    width:'100%',
    height:'100%',

  },
  box2:{
    flex:2,
    position:'absolute',
    backgroundColor:'green',
    width:'80%',
    height:'10%',
    top:'60%',
    borderRadius:5,
  }


})
