import { StyleSheet, Text, Pressable, StatusBar, View } from 'react-native'
import React from 'react'
import Background from './background'


export default function FitnessGoal({ navigation }: any) {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

            <Background />
            <View>
                <Text style={styles.heading}>Your fitness goal</Text>
                <Text style={styles.subHeading}>Choose one to start. You can change it later.</Text>
            </View>


            <View style={styles.fitnessGoalContainer}>

                <Pressable style={[styles.glass, styles.pressableContainer]} >
                    <Text style={styles.fitnessGoalName}>Lose weight</Text>
                    <Text style={styles.fitnessGoalDescription}>Burn fat with cardio-led plans</Text>
                </Pressable>

                <Pressable style={[styles.glass, styles.pressableContainer]} >
                    <Text style={styles.fitnessGoalName}>Build muscle</Text>
                    <Text style={styles.fitnessGoalDescription}>Progressive strength training</Text>
                </Pressable>

                <Pressable
                    style={[styles.glass, styles.pressableContainer]}
                    onPress={() => navigation.navigate('Workout')}
                    >
                    <Text style={styles.fitnessGoalName}>Stay active</Text>
                    <Text style={styles.fitnessGoalDescription}>
                        Keep a steady daily routine
                    </Text>
                </Pressable>    

                <Pressable style={[styles.glass, styles.pressableContainer]} >
                    <Text style={styles.fitnessGoalName}>Improve flexibility</Text>
                    <Text style={styles.fitnessGoalDescription}>Mobility and stretching</Text>
                </Pressable>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#08151C',
        // alignItems:'center',
        paddingVertical: 50,
        paddingHorizontal: 24,
        // justifyContent:'center',

    },
    glass: {
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.09)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.16)'
    },
    pressableContainer: {
        flex: 0,
        justifyContent: 'flex-start',
        padding: 16,
    },
    heading: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },

    subHeading: {
        color: 'rgba(255,255,255,0.5)',
        marginVertical: 12,
        fontSize: 14,
        fontWeight: "400"
    },
    fitnessGoalName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    fitnessGoalDescription: {
        color: 'rgba(255,255,255,0.5)',
        fontWeight: "400"
    },
    fitnessGoalContainer:
    {
        flex: 1,
        gap: 12,
    }
})