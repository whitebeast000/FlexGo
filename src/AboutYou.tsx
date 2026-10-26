import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './background'
import { Formik } from 'formik'


export default function AboutYou() {
  return (
     <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    
            <Background />
        <View>
            
            <Text style={styles.heading} > About You</Text>
            <Text style={styles.subHeading} > Used to estimate calories. You can edit it later.</Text>

        </View>

        <View >
        
                  <Formik 
            initialValues={{name: '', age:'', weight:'', height:''}} 
            onSubmit= {(values) => console.log(values)}
        >
                {({ handleChange, handleSubmit, values}) =>(
                    <View style={styles.AboutContainer}>
                        <View style={styles.glass}>
                        <Text style={[ styles.subHeading,styles.inputLabel]}>Name </Text>
                        <TextInput 
                        style={styles.inputText}
                        placeholder="Moiz"
                        placeholderTextColor="#9DB2B8"
                        value = {values.name}
                        onChangeText = {handleChange('name')}
                        />
                        
                        <Text style={[styles.subHeading,styles.inputLabel]}>Age </Text>
                        <TextInput 
                        style={styles.inputText}
                        placeholder="18"
                        keyboardType='number-pad'
                        placeholderTextColor="#9DB2B8"
                        value = {values.age}
                        onChangeText = {handleChange('age')}
                        />
                        
                        <Text style={[styles.subHeading,styles.inputLabel]}>Weight(kg) </Text>
                        <TextInput 
                        style={styles.inputText}
                        placeholder="40.5"
                        keyboardType='decimal-pad'
                        placeholderTextColor="#9DB2B8"
                        value = {values.weight}
                        onChangeText = {handleChange('weight')}
                        />
                        
                        <Text style={[styles.subHeading,styles.inputLabel]}>Height(cm) </Text>
                        <TextInput 
                        style={styles.inputText}
                        placeholder="156"
                        keyboardType='number-pad'

                        placeholderTextColor="#9DB2B8"
                        value = {values.height}
                        onChangeText = {handleChange('height')}
                        />

                        </View>

                        <View>
                               <TouchableOpacity
                        style={styles.AboutSubmitBtn}
                        onPress={handleSubmit}
                        >
                            <Text style={styles.AboutSubmitText}>Continue</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                )}
            </Formik>



        </View>
    </View>
  )
}

const styles = StyleSheet.create({

   container:{
    flex:1,
    backgroundColor: '#08151C',
    // justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop:80,    
    paddingBottom:130,
},

AboutContainer:{
    justifyContent:'space-between',
    height:'100%'
},

    glass:{
        borderRadius: 20,  
        padding:24,
        backgroundColor: 'rgba(255,255,255,0.09)',
        borderWidth:1,
        borderColor:   'rgba(255,255,255,0.16)'
    },

        heading:{
        color:'white',
        fontSize:28,
        fontWeight: 'bold'
    },

    subHeading:{
        color:'white',
        marginVertical:12,
        fontSize:14,
        fontWeight: "300"
    },
  
  inputText:{
    color: '#EAF6F3',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
    backgroundColor: 'rgba(255,255,255,0.16)',
    marginBottom: 12,
    borderRadius:10,
    marginTop: 0,
    paddingVertical: 12,
    
    paddingHorizontal:12,
  },

  inputLabel:{
    color: '#EAF6F3',
    paddingBottom:0 ,
    fontSize: 14,
    fontWeight:'500',
    marginBottom:6,
    marginTop:0,
  },

  AboutSubmitBtn:{
    backgroundColor:'white',
    color: 'black',
    borderRadius:15, 
},

AboutSubmitText:{
  color:'black',
    textAlign:'center',
        padding: 12,
},

})