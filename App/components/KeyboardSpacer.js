import React, { useState, useEffect } from "react";
import { View, StyleSheet, Keyboard, Dimensions } from "react-native";

export default KeyboardSpacer = ({ onToggle = () => null }) => {
    const [keyboardSpace, setKeyboardSpace] = useState(0);

    useEffect(() => {
        const showListener = Keyboard.addListener("keyboardDidShow", (event) => {
            const endY = event.endCoordinates.screenY;
            const screenHeight = Dimensions.get("window").height;
            onToggle(true);
            setKeyboardSpace(screenHeight - endY + 20);
        });

        const hideListener = Keyboard.addListener("keyboardDidHide", () => {
            onToggle(false);
            setKeyboardSpace(0);
        });

        return () => {
            showListener.remove();
            hideListener.remove();
        }
    }, [])

    const styles = StyleSheet.create({
        container: {
            right: 0,
            left: 0,
            bottom: 0
        }
    });

    return <View style={[styles.container, { height: keyboardSpace }]}></View>


};