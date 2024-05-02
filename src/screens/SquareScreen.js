import React, { useReducer } from "react";

import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./components/ColorCounter";


const COLOR_INCREMENT = 15;


const reducer = (state, action) => {
    // state  === {red:num, green:num, blue:num}
    // action === {colorToChange : 'red' || 'blue' || 'green', amount : 15 || -15}


    switch (action.colorToChnage) {

        case 'red':
            return { ...state, red: state.red + action.amount };

        case 'green':
            return { ...state, green: state.green + action.amount };

        case 'blue':
            return { ...state, blue: state.blue + action.amount };

        default:
            return state;
    }

}

const SquareScreen = () => {



    const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });

    const { red, green, blue } = state;


    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({ colorToChnage: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChnage: 'red', amount: -1 * COLOR_INCREMENT })}
            />

            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({ colorToChnage: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChnage: 'blue', amount: -1 * COLOR_INCREMENT })}
            />

            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({ colorToChnage: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChnage: 'green', amount: -1 * COLOR_INCREMENT })}
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
