import { StyleSheet, Text,Pressable,StatusBar, View } from 'react-native'
import React from 'react'
import Background from './background'

export default function PushupVariations({navigation}: any) {
  return (
    <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    
            <Background/>   
        <View>
            <Text style={styles.subHeading}>Strength</Text>
            <Text style={styles.heading}>Push-ups</Text>
            <Text style={styles.subHeading}>Pick a variation to see the details</Text>
        </View>


        <View style={styles.pushupContainer}>

        <Pressable style={[styles.glass, styles.pressableContainer]} 
        onPress={()=> navigation.navigate('SpecificPushupPage')}
        >
      <Text style={styles.pushupName}>Standard Push-up</Text>
      <Text style={styles.pushupLevel}>Beginner</Text>
        </Pressable>
        
        <Pressable style={[styles.glass, styles.pressableContainer]} >
      <Text style={styles.pushupName}>Diamond Push-up</Text>
      <Text style={styles.pushupLevel}>Advanced </Text>
        </Pressable>
        
        <Pressable style={[styles.glass, styles.pressableContainer]} >
      <Text style={styles.pushupName}>Wide Push-up</Text>
      <Text style={styles.pushupLevel}>Intermediate </Text>
        </Pressable>
        
        <Pressable style={[styles.glass, styles.pressableContainer]} >
      <Text style={styles.pushupName}>Incline Push-up</Text>
      <Text style={styles.pushupLevel}>Beginner </Text>
        </Pressable>
        
        <Pressable style={[styles.glass, styles.pressableContainer]} >
      <Text style={styles.pushupName}>Decline Push-up</Text>
      <Text style={styles.pushupLevel}>Advanced </Text>
        </Pressable>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({

    container:{
    flex:1,
    backgroundColor: '#08151C',
    // alignItems:'center',
    paddingVertical: 50,
    paddingHorizontal: 24,
    // justifyContent:'center',

    },
      glass:{
        borderRadius: 20,  
        backgroundColor: 'rgba(255,255,255,0.09)',
        borderWidth:1,
        borderColor:   'rgba(255,255,255,0.16)'
    },
    pressableContainer:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:16,
        alignItems:'center'


    },
    heading:{
        color:'white',
        fontSize:28,
        fontWeight: 'bold'
    },

    subHeading:{
        color:'rgba(255,255,255,0.5)',
        marginVertical:12,
        fontSize:14,
        fontWeight: "400"
    },
    pushupName:{
        color:'white',
        fontSize:20,
        fontWeight: 'bold'
    },
    pushupLevel:{
        color:'rgba(255,255,255,0.5)',
        fontWeight: "400"
    },
    pushupContainer:
    {
        flex: 1,
        gap:12,
    }
})