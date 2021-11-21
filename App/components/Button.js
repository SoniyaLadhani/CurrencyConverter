import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Button = ({ onPress, text }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={styles.buttonIcon} source={require("../assets/images/reverse.png")} resizeMode='contain' ></Image>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    buttonText: {
        color: colors.white,
        fontSize: 16
    }
});

export default Button;