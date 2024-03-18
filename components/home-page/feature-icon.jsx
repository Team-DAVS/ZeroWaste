import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const FeatureIcon = ({ src }) => {
    // const image_path = require(`${src}`);
    return (
        <View style={styles.outerBorder}>
            <View style={styles.innerBorder}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/home-page/icons/brain.png')}
                        // source={{ uri: src }}
                        // source={image_path}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerBorder: {
        borderRadius: 26,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.4)', // rgba(63, 189, 241, 0.4)
        padding: 2,
    },
    innerBorder: {
        borderRadius: 24,
        borderWidth: 3,
        borderColor: 'rgba(0, 0, 0, 0.6)',
        padding: 4,
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 24,
        height: 24,
    },
});

export default FeatureIcon;
