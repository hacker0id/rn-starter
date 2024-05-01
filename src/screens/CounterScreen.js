import React, { useState } from "react";
import { View, Text, Button } from 'react-native';


const CounterScreen = () => {


    const [counter, setCounter] = useState(0);


    return <View>

        <Text>Counter Count : {counter} </Text>
        <Button title="Increase" onPress={() => {
            setCounter(counter + 1);


        }} />
        <Button title="Decrease" onPress={() => {
            if (counter > 0) {
                setCounter(counter - 1);
            }
            else {
                alert('Counter Should Remain > 0');
            }
        }} />
    </View>
};
export default CounterScreen;