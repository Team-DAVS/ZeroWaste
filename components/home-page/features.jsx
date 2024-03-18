import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FeatureIcon from './feature-icon'

const featuresData = [
    {
        title: 'Next-Gen Algorithm',
        description: 'The algorithm is very accurate to give you the best reward possible.',
        iconSrc: require('../../assets/home-page/icons/brain.png'),
    },
    {
        title: 'DX & UX',
        description: 'The developer experience with open source codebase and user experience is prioritized for easy usage of ZeroWaste.',
        iconSrc: require('../../assets/home-page/icons/dev.png'),
    },
    {
        title: 'Zero cost Benefit',
        description: 'ZeroWaste promotes the eco-friendly goals and someone can earn bunch of points without even spending anything.',
        iconSrc: require('../../assets/home-page/icons/idea.png'),
    },
    {
        title: 'Recycle to Future',
        description: 'We are disposing wastes, and promoting usage of recycled ones all at the same time.',
        iconSrc: require('../../assets/home-page/icons/recycle.png'),
    },
    {
        title: 'Community Centered',
        description: 'This is done by the community for the community.',
        iconSrc: require('../../assets/home-page/icons/square.png'),
    },
    {
        title: 'Wallet Reward Points',
        description: 'The company partnerships offer huge number of options for purchasing valuable items using your wallet.',
        iconSrc: require('../../assets/home-page/icons/wallet.png'),
    },
];

const Features = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Features</Text>
            {featuresData.map((feature, index) => (
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
        marginBottom: 50,
        marginHorizontal: 20,
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
        textAlign: 'center',
        color: '#000'
    },
});

export default Features;
