import { StyleSheet, View, Image } from 'react-native';

export default function Divider() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/home-page/divider.png')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 75,
        height: 20,
        paddingVertical: 5,
    },
});
