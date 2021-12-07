import React, { useState, useContext } from 'react';
import { View, StatusBar, StyleSheet, Image, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import dayjs from 'dayjs';

import Button from '../components/Button';
import ConversionInput from '../components/ConversionInput';
import KeyboardSpacer from '../components/KeyboardSpacer';
import colors from '../constants/colors';
import { ConversionContext } from '../util/conversionContext';

const screen = Dimensions.get('window');

const Home = ({ navigation }) => {
    const conversionRatio = "0.8345";
    const [value, setValue] = useState("100");
    const [scrollEnabled, setScrollEnabled] = useState(false);

    const {
        baseCurrency,
        quoteCurrency,
        swapCurrencies,
        setBaseCurrency,
        setQuoteCurrency,
    } = useContext(ConversionContext);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            <SafeAreaView style={styles.header}>
                <TouchableOpacity onPress={() => navigation.push('Options')}>
                    <Icon name="settings-5-line" size="24" color={colors.white}></Icon>
                </TouchableOpacity>
            </SafeAreaView>
            <ScrollView scrollEnabled={scrollEnabled}>
                <View style={styles.content}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logoBackground}
                            source={require('../assets/images/background.png')}
                            resizeMode="contain"
                        />
                        <Image
                            style={styles.logoImage}
                            source={require('../assets/images/logo.png')}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.textHeader}> Currency Convertor </Text>
                    <ConversionInput
                        text={baseCurrency}
                        value={value}
                        onButtonPress={() => navigation.push('CurrencyList',
                            {
                                title: 'Base Currency', activeCurrency: baseCurrency,
                                isBaseCurrency: true
                            })}
                        keyboardType="numeric"
                        onChangeText={(text) => setValue(text)}
                    />

                    <ConversionInput
                        text={quoteCurrency}
                        value={value && `${parseFloat(value * conversionRatio).toFixed(2)}`}
                        onButtonPress={() => navigation.push('CurrencyList',
                            {
                                title: 'Quote Currency', activeCurrency: quoteCurrency,
                                isBaseCurrency: false
                            })}
                        keyboardType="numeric"
                        onChangeText={(text) => console.log('text', text)}
                        editable={false}
                    />

                    <Text style={styles.text}> {`1 ${baseCurrency} = ${conversionRatio} ${quoteCurrency} as of ${dayjs().format('MMMM DD, YYYY')}`}</Text>
                    <Button text="Reverse Currencies" onPress={() => swapCurrencies()}></Button>
                    <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
                </View>
            </ScrollView>
        </View >
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logoBackground: {
        width: screen.width / 0.45,
        height: screen.width * 0.45,
    },
    logoImage: {
        position: 'absolute',
        width: screen.width * 0.25,
        height: screen.width * 0.25,

    },
    textHeader: {
        fontWeight: "700",
        color: colors.white,
        textAlign: "center",
        fontSize: 20,
        marginVertical: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.white,
    },
    content: {
        paddingTop: screen.height * 0.1,
    },
    header: {
        alignItems: "flex-end",
        marginHorizontal: 20
    }
});

export default Home;