import React from 'react';
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';

import RowItem from '../components/RowItem';
import RowItemSeparator from '../components/RowItemSeparator';

const CurrencyList = ({ navigation, route = {} }) => {
    const insets = useSafeAreaInsets();
    const params = route.params || {};

    return (

        <View style={{ backgroundColor: colors.white }}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white}></StatusBar>
            <FlatList
                data={currencies}
                renderItem={({ item }) => {
                    const selected = params.activeCurrency === item;
                    return (
                        <RowItem title={item} onPress={() => navigation.pop()} rightIcon={
                            selected && (<View style={styles.icon}>
                                <Icon name="check-line" size="24" color={colors.white}></Icon>
                            </View>)
                        }></RowItem>
                    )
                }}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => <RowItemSeparator />}
                ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        backgroundColor: colors.blue,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }
});

export default CurrencyList;