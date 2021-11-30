import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, StyleSheet, View, Linking, Alert } from 'react-native';
import Icon from 'react-native-remix-icon';

import colors from '../constants/colors';
import RowItem from '../components/RowItem';

const openLink = (url) => {
    Linking.openURL(url).catch(() => {
        Alert.alert('Something went worng', 'Please try again later.');
    })
}

const Options = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <ScrollView>
                <RowItem
                    title="Themes"
                    onPress={() => alert('todo')}
                    rightIcon={
                        <Icon name="arrow-drop-right-line" size="24" color={colors.blue}></Icon>
                    }
                />
                <View styles={styles.separator} />
                <RowItem
                    title="React Native Basics"
                    onPress={() => openLink('https://www.google.com')}
                    rightIcon={
                        <Icon name="external-link-fill" size="24" color={colors.blue}></Icon>
                    }
                />
                <View styles={styles.separator} />
                <RowItem
                    onPress={() => openLink('https://www.google.com')}
                    title="React Native By Example"
                    rightIcon={
                        <Icon name="external-link-fill" size="24" color={colors.blue}></Icon>
                    }
                />
            </ScrollView>
        </SafeAreaView>
    )
};

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
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
    },
})

export default Options;