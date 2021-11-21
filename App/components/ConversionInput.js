import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const ConversionInput = ({ text, onButtonPress, ...props }) => {
    let containerStyles = [styles.container];

    if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} {...props}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    containerDisabled: {
        backgroundColor: colors.offWhite
    },
    button: {
        borderRightWidth: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightColor: colors.border,
        padding: 15
    },
    buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: colors.textLight,
    }
})


export default ConversionInput;