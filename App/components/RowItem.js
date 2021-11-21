import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import colors from '../constants/colors';

const RowItem = ({ title, rightIcon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.row}>
            <Text style={styles.title} >{title}</Text>
            {rightIcon}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
    },
    title: {
        color: colors.text,
        fontSize: 16,
    }
});


export default RowItem;
