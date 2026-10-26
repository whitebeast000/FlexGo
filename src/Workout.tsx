import { Pressable,StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './background'
import { CardioArt, FlexibilityArt, StrengthArt } from './WorkoutArt'


export default function Workout({ navigation }: any) {
  return (
    <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <Background/>

        <View>
            <Text style={styles.heading}>Workout</Text>
            <Text style={styles.subHeading}>Choose a category</Text>
        </View>


            <View style={styles.workoutContainer}>

                <Pressable style={[styles.glass, styles.workoutPressableContainer]}
                onPress={() => navigation.navigate('PushupVariations')} >

                        <View style={styles.art}><StrengthArt/></View>
                    <Text style={styles.excerciseName}>Strength</Text>
                    <Text style={styles.excerciseDescription}>Push-ups, squats, pull-ups </Text>
                </Pressable>
                
                <Pressable style={[styles.glass, styles.workoutPressableContainer]} >
                 
                    <View style={styles.art}><CardioArt/></View>
                    <Text style={styles.excerciseName}>Cardio</Text>
                    <Text style={styles.excerciseDescription}>Running, jump rope, cycling </Text>
                </Pressable>
                
                <Pressable style={[styles.glass, styles.workoutPressableContainer]} >
                    
                    <View style={styles.art}><FlexibilityArt/></View>
                    <Text style={styles.excerciseName}>Flexibility</Text>
                    <Text style={styles.excerciseDescription}>Stretching and mobility </Text>
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
    workoutPressableContainer:{
        flex:0,
        // flexDirection:'row',
        justifyContent:'flex-end',
        padding:16,
        height:'25%',
        overflow:'hidden',
        
        // alignItems:'center'
    },

    art:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:70,
    overflow:'hidden',               // clips anything drawn outside the strip
    borderTopLeftRadius:19,          // card radius 20 minus the 1px border
    borderTopRightRadius:19,
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

    workoutContainer:
    {
        flex: 1,
        gap:12,
    },
      excerciseName:{
        color:'white',
        fontSize:20,
        fontWeight: 'bold'
    },
    excerciseDescription:{
        color:'rgba(255,255,255,0.5)',
        fontWeight: "400"
    },
    
})