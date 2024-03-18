import { View, Text, ScrollView, StyleSheet } from 'react-native';

const rewardsData = [
    {
        stepNumber: 'Step 1',
        description: 'Login to ZeroWaste.',
    },
    {
        stepNumber: 'Step 2',
        description: 'Click the picture of the waste.',
    },
    {
        stepNumber: 'Step 3',
        description: 'Get the location to dump the waste.',
    },
    {
        stepNumber: 'Step 4',
        description: 'Dump and click the proof.',
    },
    {
        stepNumber: 'Step 5',
        description: 'Get Verified & Earn Points.',
    },
    {
        stepNumber: 'Step 6',
        description: 'Use points to buy any recyclable products.',
    },
];

export default function Rewards() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Rewards</Text>
            <Text style={styles.subtitle}>This is how ZeroWaste provide incentives.</Text>
            {rewardsData.map((step, index) => (
                <View key={index} style={styles.step}>
                    <Text style={[styles.stepTitle, styles.italic]}>{step.stepNumber}</Text>
                    <Text style={styles.stepDescription}>{step.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 40
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    step: {
        marginBottom: 20,
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#a5a5a5'
    },
    stepDescription: {
        fontSize: 16,
    },
    italic: {
        fontStyle: 'italic',
    },
});
