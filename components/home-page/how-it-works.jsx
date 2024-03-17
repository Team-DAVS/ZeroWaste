import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Timeline from 'react-native-timeline-flatlist';

export default function HowItWorks() {
    const data = [
        { time: 'step1', title: 'Step 1 Title', description: 'Step 1 Description ', circleColor: '#009688', lineColor: '#009688' },
        { time: 'step2', title: 'Step 2 Title', description: 'Step 2 Description' },
        { time: 'step3', title: 'Step 3 Title', description: 'Step 3 Description' },
        { time: 'step4', title: 'Step 4 Title', description: 'Step 4 Description' },
        { time: 'step5', title: 'Step 5 Title', description: 'Step 5 Description' },
    ];

    return (
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
                style={styles.timeline}
                data={data}
                separator={true}
                circleSize={20}
                circleColor='#3FBDF1'
                lineColor='#3FBDF1'
                innerCircle={'dot'}
                timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13, overflow: 'hidden' }}
                descriptionStyle={{ color: 'gray' }}
                options={{
                    style: { paddingTop: 5 }
                }}
            />
        </View>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    gradient: {
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    timelineContainer: {
        flex: 1,
        marginTop: 20,
        width: '100%',
    },
    timeline: {
        flex: 1,
        marginTop: 20,
    },
});
