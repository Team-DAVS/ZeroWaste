import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Timeline from 'react-native-timeline-flatlist';
import { ScrollView } from 'react-native-web';

export default function HowItWorks() {
    const data = [
        { time: 'Step 1', title: 'Download the App', description: 'Get the ZeroWaste app from the App Store or Google Play Store.' },
        { time: 'Step 2', title: 'Sign Up and Log In', description: 'Create an account and log in to access all features.' },
        { time: 'Step 3', title: 'Capture Waste Items', description: 'Use the in-app camera feature to capture images of waste items.' },
        { time: 'Step 4', title: 'Get Reward Points', description: 'Receive reward points based on the type and quantity of waste items.' },
        { time: 'Step 5', title: 'Redeem Rewards', description: 'Use your accumulated reward points to redeem rewards from our partners.' },
    ];

    return (
        <ScrollView>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#3FBDF1', '#A7E1F9']}
                    style={styles.gradient}
                    start={[0, 0]}
                    end={[1, 0]}
                >
                    <Text style={styles.title}>How It Works</Text>
                </LinearGradient>
                <Timeline
                    circleSize={20}
                    separator={true}
                    circleColor="red"
                    lineColor="blue"
                    lineWidth={3}
                    data={data}
                    descriptionStyle={styles.descriptionStyle}
                    timeContainerStyle={styles.timeContainerStyle}
                    timeStyle={styles.timeStyle}
                    circleStyle={styles.circleStyle}
                    titleStyle={styles.titleStyle}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    descriptionStyle: {
        color: '#000',
    },
    timeContainerStyle: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 90,
        borderRadius: 30,
    },
    timeStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    titleStyle: {
        color: '#fff',
        fontSize: 23,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 20,
    },
});
