import { StyleSheet, Text,FlatList ,StatusBar, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './background'

export default function SpecificPushupPage() {
  
  const data = [
    {id: '1', name:'Handes under shoulders, body in a straight line.'},
    {id: '2', name:'Lower your chest until elbows reach 90 degrees.'},
    {id: '3', name:'Keep your back up. '},

]
    return (
    <View style={styles.mainContainer}>
         <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    
            <Background/>   
        <View style={styles.innerContainer}>
                
                <View>
                    <Text style={styles.subHeading}> Pushups </Text>
                    <Text style={styles.heading}>Standard Push-up</Text>   
                    {/* It is a hardcoded text wole page will be based on API  */}

                </View>


                <View style={styles.SpecificPushupPageContent}>
                        <View style={[styles.glass, styles.PushupInfoDisplayer]}>
                                <Text style={[ styles.heading,styles.setQuantity]}> 3 </Text>
                                <Text style={[ styles.subHeading,styles.pushupContentText]}>Sets</Text>
                        </View>
                        
                        <View style={[styles.glass, styles.PushupInfoDisplayer]}>
                                <Text style={[ styles.heading,styles.setQuantity]}> 12 </Text>
                                <Text style={[styles.subHeading,styles.pushupContentText ]}>Reps</Text>
                        </View>
                        
                        <View style={[styles.glass, styles.PushupInfoDisplayer]}>
                                <Text style={[ styles.heading,styles.setQuantity]}> 60s </Text>
                                <Text style={[ styles.subHeading,styles.pushupContentText]}>Rest</Text>
                        </View>

                </View>

                <View style={[styles.glass, styles.containersPadding]} >
                        <View style={styles.flexRow}>
                            <Text style={[styles.subHeading, styles.mZero_pZero]}>TargetMuscles</Text>
                            <Text style={[styles.subHeading, styles.mZero_pZero]}>Difficulty</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={[styles.targetMusclesText,styles.mZero_pZero]}>Chest,Triceps, shoulders</Text>
                            <Text style={[styles.targetMusclesText,styles.mZero_pZero]}>Beginner</Text>
                        </View>
                </View>

                <View style={[styles.glass, styles.containersPadding]}>
                    <Text style={[styles.heading,styles.innerheading]}>Instructions</Text>
                    <FlatList
                    data={data}
                    renderItem={({ item }) => <Text style={styles.listText}> {item.id}. {item.name} </Text>}
                    />
                </View>
        </View>

        <TouchableOpacity style={styles.startWorkoutButton}>
            <Text style={styles.startWorkoutButtonText}>Start workout</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({


    mZero_pZero:{
    marginVertical:0 ,
    paddingVertical:0,       
    },

    flexRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    
    },

    
    mainContainer:{
    flex:1,
    backgroundColor: '#08151C',
    paddingVertical: 50,
    paddingHorizontal: 24,
    justifyContent:'space-between'
    },
    
    innerContainer:{
    gap:20,
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
  
    SpecificPushupPageContent:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap: 8,
    },

    PushupInfoDisplayer:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,

    },
    setQuantity:{
        fontSize:22,
        margin:0,
        paddingVertical:0

    },
    pushupContentText:{
        fontWeight:500,
        marginVertical:0,
        paddingVertical:0
    },


    targetMusclesText:{
        color:'white',
        fontSize:16,
        fontWeight:'400',
        marginVertical:0,
        paddingVertical:0,
    },
    containersPadding:{
        padding:20,
    },

    targetMuscleHeadings:{
        margin:0,
        padding:0,
    },
    innerheading:{
        fontSize:16,
        fontWeight:'700',

    },

    listText:{
        color:'white',
        marginVertical:5,
        fontWeight: '400'
    },

    startWorkoutButton:{
        backgroundColor:'white',
        borderRadius:15,
        paddingVertical:15,
        // paddingHorizontal:30,
        textAlign:'center',
    },
    startWorkoutButtonText:{
        fontSize:16,
        fontWeight:'500',
        letterSpacing:.5,
        textAlign:'center',

    }

})