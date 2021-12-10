import React, { useContext } from 'react';
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import { ConversionContext } from '../util/conversionContext';

import RowItem from '../components/RowItem';
import RowItemSeparator from '../components/RowItemSeparator';

const CurrencyList = ({ navigation, route = {} }) => {
    const insets = useSafeAreaInsets();
    const params = route.params || {};
    const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } = useContext(ConversionContext);

    return (

        <View style={{ backgroundColor: colors.white }}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white}></StatusBar>
            <FlatList
                data={currencies}
                renderItem={({ item }) => {
                    let selected = false;
                    if (params.isBaseCurrency && item === baseCurrency) {
                        selected = true;
                    } else if (!params.isBaseCurrency && item === quoteCurrency) {
                        selected = true;
                    }
                    return (
                        <RowItem title={item} onPress={() => {
                            params.isBaseCurrency ? setBaseCurrency(item) : setQuoteCurrency(item);
                            navigation.pop()
                        }} rightIcon={
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