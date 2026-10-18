import { StyleSheet,TextInput, View,StatusBar,Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './background'
import { Formik } from 'formik'

export default function Login() {
  return (
    <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    
            <Background />
        <View>
            
            <Text style={styles.heading} > Welcome Back</Text>
            <Text style={styles.subHeading} > Sign in to continue your trainging</Text>

        </View>

        <View style={styles.glass}>
            
            <Formik 
            initialValues={{email: '', password:''}} 
            onSubmit= {(values) => console.log(values)}
        >
                {({ handleChange, handleSubmit, values}) =>(
                    <View>
                        <Text style={[ styles.subHeading,styles.inputLabel]}>Email </Text>
                        <TextInput 
                        style={styles.inputText}
                        placeholder="moiz@gmail.com"
                        placeholderTextColor="#9DB2B8"
                        value = {values.email}
                        onChangeText = {handleChange('email')}
                        />
                        
                        <Text style={[styles.subHeading,styles.inputLabel]}>Password </Text>
                        <TextInput 
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#9DB2B8"
                        value = {values.password}
                        onChangeText = {handleChange('password')}
                        />

                        <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={handleSubmit}
                        >
                            <Text style={styles.loginBtnText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>

        </View>
            <Text style={[styles.subHeading , styles.createAccLine]} >New here? Create account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#08151C',
    justifyContent: 'center',
    paddingHorizontal: 24,

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
    paddingBottom:0 ,
    fontSize: 12,
    fontWeight:'500',
    marginBottom:0,
    marginTop:0,
  },

  loginBtn:{
    backgroundColor:'white',
    color: 'black',
    borderRadius:10,  
},

loginBtnText:{
  color:'black',
    textAlign:'center',
        padding: 12,
},

    createAccLine:{
        textAlign: 'center',
        // fontWeight: '500',
    }




})