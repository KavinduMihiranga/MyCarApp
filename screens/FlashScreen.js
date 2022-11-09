import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useEffect,useState} from 'react';
import {Button, NativeBaseProvider, Image} from 'native-base';

export default function FlashScreen({navigation}) {
    const [isGo, setIsGo] = useState(true);

    useEffect(() => {
        if (isGo == true) {
            setTimeout(() => {
                navigation.navigate("Login")
                setIsGo(false);
            }, 2000);
        }
    });


    
    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.context} >
            <Image 
                style ={styles.img}
                alt={'images'}
                source={require('../assets/images/mycar.png')}
    />
                
            </SafeAreaView>
        </NativeBaseProvider>
    );
}
const styles = StyleSheet.create({
    context: {
        backgroundColor: '#010818',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    img :{
        width : "50%",
        height : "10%",
        resizeMode:'cover'
       
      },
});
