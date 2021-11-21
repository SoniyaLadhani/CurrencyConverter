import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, Image, Dimensions, Text, ScrollView } from 'react-native';
import dayjs from 'dayjs';

import Button from '../components/Button';
import ConversionInput from '../components/ConversionInput';
import KeyboardSpacer from '../components/KeyboardSpacer';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const Home = () => {
    const baseCurrency = "USD";
    const quoteCurrency = "GBP";
    const conversionRatio = "0.8345";

    const [scrollEnabled, setScrollEnabled] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>

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
                        value="123"
                        onButtonPress={() => alert('todo!')}
                        keyboardType="numeric"
                        onChangeText={(text) => console.log('text', text)}
                    />

                    <ConversionInput
                        text={quoteCurrency}
                        value="123"
                        onButtonPress={() => alert('todo!')}
                        keyboardType="numeric"
                        onChangeText={(text) => console.log('text', text)}
                        editable={false}
                    />

                    <Text style={styles.text}> {`1 ${baseCurrency} = ${conversionRatio} ${quoteCurrency} as of ${dayjs().format('MMMM DD, YYYY')}`}</Text>
                    <Button text="Reverse Currencies" onPress={() => alert('todo')}></Button>
                    {/* <View style={{ height: screen.height }} /> */}
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
        paddingTop: screen.height * 0.2,
    },
});

export default Home;