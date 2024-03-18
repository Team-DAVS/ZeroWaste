import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Hero() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/home-page/hero-illustration.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.squaresContainer}>
                <View style={[styles.square, styles.leftTop]}></View>
                <View style={[styles.square, styles.leftBottom]}></View>
                <View style={[styles.square, styles.rightTop]}></View>
                <View style={[styles.square, styles.rightBottom]}></View>
            </View>
            <Text style={styles.title}>Welcome to <Text style={styles.mainTxt}>ZeroWaste</Text> </Text>
            <Text style={styles.subtitle}>Start earning points now</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Earn Rewards</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        position: 'relative',
        marginTop: 120
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    squaresContainer: {
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    square: {
        width: 10,
        height: 10,
        borderWidth: 2,
        borderRadius: 3,
    },
    leftTop: {
        position: 'absolute',
        top: 6,
        left: 16,
        borderColor: '#3FBDF1',
    },
    leftBottom: {
        position: 'absolute',
        bottom: 18,
        left: 5,
        borderColor: '#3FBDF1',
    },
    rightTop: {
        position: 'absolute',
        top: 6,
        right: 16,
        borderColor: '#3FBDF1',
    },
    rightBottom: {
        position: 'absolute',
        bottom: 18,
        right: 5,
        borderColor: '#3FBDF1',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3FBDF1',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    mainTxt: {
        color: '#3FBDF1',
        fontSize: 26,
    }
});