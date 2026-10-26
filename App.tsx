// import React from 'react'
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ScrollView } from 'react-native'
//import SplashScreen from './src/splash'
// import Login from './src/login'
// import Registration from './src/registration'
// import PushupVariations from './src/pushup_variations'
// import Workout from './src/Workout'
// import FitnessGoal from './src/FitnessGoal'
// import SpecificPushupPage from './src/SpecificPushupPage'
// import SplashScreen from './src/splash';
// import FitnessGoal from './src/FitnessGoal';
// import Workout from './src/Workout';
// import PushupVariations from './src/pushup_variations';
// import AboutYou from './src/AboutYou';
import WorkoutCompletedPage from './src/WorkoutCompletedPage';

// const stack = createNativeStackNavigator();

export default function App() {
  return (
    
    // <NavigationContainer>

    //     <stack.Navigator screenOptions={{headerShown: false}}>
    //         <stack.Screen name="Splash" component={SplashScreen} />
    //         <stack.Screen name="FitnessGoal" component={FitnessGoal}/>
    //         <stack.Screen name="Workout" component={Workout}/>
    //         <stack.Screen name="PushupVariations" component={PushupVariations}/>
    //         <stack.Screen name="SpecificPushupPage" component={SpecificPushupPage}/>
    //     </stack.Navigator>

    // </NavigationContainer>
    // <AboutYou/>
    <WorkoutCompletedPage/>


  )
};

