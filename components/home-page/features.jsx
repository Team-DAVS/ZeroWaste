import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FeatureIcon from './feature-icon';

const sampleFeatures = [
    {
        title: 'Feature 1',
        description: 'Description for Feature 1',
        iconSrc: '../../assets/home-page/icons/brain.svg',
    },
    {
        title: 'Feature 2',
        description: 'Description for Feature 2',
        iconSrc: '../../assets/home-page/icons/db.svg',
    },
    {
        title: 'Feature 3',
        description: 'Description for Feature 3',
        iconSrc: '../../assets/home-page/icons/dx.svg',
    },
    {
        title: 'Feature 4',
        description: 'Description for Feature 4',
        iconSrc: '../../assets/home-page/icons/options.svg',
    },
    {
        title: 'Feature 5',
        description: 'Description for Feature 5',
        iconSrc: '../../assets/home-page/icons/terminal.svg',
    },
    {
        title: 'Feature 6',
        description: 'Description for Feature 6',
        iconSrc: '../../assets/home-page/icons/time.svg',
    },
];

const Features = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Features</Text>
            {sampleFeatures.map((feature, index) => (
                <View key={index} style={styles.featureContainer}>
                    <View style={styles.featureContent}>
                        <View>
                            <FeatureIcon src={feature.iconSrc} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.featureTitle}>{feature.title}</Text>
                            <Text style={styles.featureDescription}>{feature.description}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        marginBottom: 50
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    featureContainer: {
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 12,
        paddingVertical: 30,
        paddingHorizontal: 50,
        marginBottom: 20,
    },
    featureContent: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 10,
        alignItems: 'center',
        marginTop: 10
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    featureDescription: {
        fontSize: 16,
    },
});

export default Features;
