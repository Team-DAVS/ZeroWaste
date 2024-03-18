import { View, Text, Image, StyleSheet } from 'react-native';

export default function WhyUs() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Why Us</Text>
            <View style={styles.avatarContainer}>
                <Image
                    source={require('../../assets/home-page/person1.png')}
                    style={[styles.avatar, styles.border, styles.leftTop]}
                />
                <Image
                    source={require('../../assets/home-page/person2.png')}
                    style={[styles.avatar, styles.border, styles.rightTop]}
                />
                <Image
                    source={require('../../assets/home-page/person3.png')}
                    style={[styles.avatar, styles.border, styles.leftBottom]}
                />
                <Image
                    source={require('../../assets/home-page/person4.png')}
                    style={[styles.avatar, styles.border, styles.rightBottom]}
                />
            </View>
            <Text style={styles.description}>
                Trusted by over 1k+ users to maintain a healthier ecosystem by using recycled materials and disposing of waste.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 50,
    },
    border: {
        borderWidth: 2,
        borderColor: '#fff',
    },
    leftTop: {
        position: 'relative',
        top: 10,
        left: 16,
    },
    rightTop: {
        position: 'relative',
        top: 20,
        right: 12,
    },
    leftBottom: {
        position: 'relative',
        top: 15,
        left: 12,
    },
    rightBottom: {
        position: 'relative',
        top: 0,
        right: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        paddingTop: 20,
        textAlign: 'center'
    },
});
