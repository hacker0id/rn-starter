import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View style={{ marginBottom: 50 }}>

            <Text style={{ textAlign: "center", fontSize: 18 }}>{color}</Text>

            <Button title={`Increase ${color}`} onPress={() => onIncrease()} />

            <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />

        </View>
    );
};

export default ColorCounter;
