import {  StyleSheet, StatusBar, TouchableOpacity, Text, View, } from 'react-native'
import React from 'react'
import Background from './background'

export default function WorkoutCompletedPage() {
  return (
    <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        
        <Background/>

        <View>
            <Text style={styles.heading}>Workout completed</Text>
            <Text style={styles.subHeading}>Standard Push-up</Text>
        </View>
        
        <View style={styles.WorkoutCompletionDetails}>
                <View style={[styles.glass, styles.DetailsContainers]}>
                    <Text style={[styles.heading, styles.detailsText] }>48</Text>
                    <Text style={[styles.subHeading, styles.detailsText2] }>Calories</Text>
                </View>
                <View style={[styles.glass, styles.DetailsContainers]}>
                    <Text style={[styles.heading, styles.detailsText] }>06:21</Text>
                    <Text style={[styles.subHeading, styles.detailsText2] }>Time</Text>
                </View>
                <View style={[styles.glass, styles.DetailsContainers]}>
                    <Text style={[styles.heading, styles.detailsText] }>36</Text>
                    <Text style={[styles.subHeading, styles.detailsText2] }>Reps</Text>
                </View>
        </View>
        <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save to history</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({   
    
    container:{
    flex:1,
    backgroundColor: '#08151C',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop:80,    
    paddingBottom:130,

},


    glass:{
        borderRadius: 20,  
        // padding:24,
        backgroundColor: 'rgba(255,255,255,0.09)',
        borderWidth:1,
        borderColor:   'rgba(255,255,255,0.16)'
    },

        heading:{
        color:'white',
        fontSize:28,
        fontWeight: 'bold',
        textAlign:'center',
    },

    subHeading:{
        color:'white',
        marginVertical:12,
        fontSize:14,
        fontWeight: "300",
        textAlign:'center',

    },
    
    WorkoutCompletionDetails:{
        // flex:1,
        // width: '100%',
        flexDirection:'row',
        gap:10,

    },
    DetailsContainers:{
        flex:1,
        
        justifyContent:'center',       
        alignItems:'center',
        gap:0,
    
        paddingVertical:12,
    },
   detailsText:{
    fontSize:20,
    
   },
   detailsText2:{
    fontSize:16,
    marginVertical:0,
    paddingVertical:0,
   },
   saveBtn:{
    width:'100%',
    backgroundColor:'white',
    color: 'black',
    borderRadius:15,
    marginVertical:12, 
},
   saveBtnText:{
    flex:1,
    color:'black',
    fontWeight:'600',
    textAlign:'center',
    padding: 12,
   },
})