import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const OurMoto = () => {
    return (
        <ImageBackground
            source={require('../../assets/home-page/nature.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.overlay} />
                <Text style={styles.title}>Our Moto</Text>
                <Text style={styles.motoText}>
                    We strive to make a positive impact on the world by promoting sustainable practices and helping people to make eco-friendly choices.

                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        marginVertical: 40,
        marginHorizontal: 20,
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 20,
        borderRadius: 10,
        marginBottom: 0,
        elevation: 4,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
    },
    motoText: {
        fontSize: 16,
        color: '#d5d5d5',
    },
});

export default OurMoto;
