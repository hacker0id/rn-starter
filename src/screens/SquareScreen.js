import React, { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./components/ColorCounter";






const COLOR_INCREMENT = 15;
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => setRed(red + COLOR_INCREMENT)}
                onDecrease={() => red < 0 ? alert(' Value Of Red Cannot Go Below 0') : setRed(red - COLOR_INCREMENT)}
            />

            <ColorCounter
                color="Blue"
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
                onDecrease={() => blue < 0 ? alert(' Value Of Blue Cannot Go Below 0') : setBlue(blue - COLOR_INCREMENT)}
            />

            <ColorCounter
                color="Green"
                onIncrease={() => setGreen(green + COLOR_INCREMENT)}
                onDecrease={() => green < 0 ? alert(' Value Of Green Cannot Go Below 0') : setGreen(green - COLOR_INCREMENT)}
            />

            <View
                style={{
                    marginLeft: 120,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`,
                }}
            ></View>
        </View>
    );
};

export default SquareScreen;
