import React, { useState } from "react";

import { Text, View, TextInput, StyleSheet } from "react-native";

const InputScreen = () => {

    const [name, setName] = useState('');
    return (
        <View>

            <Text>Enter Password : </Text>

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(value) => setName(value)}

            />


            {/* <Text>Welcome {name} </Text> */}
            {name.length != 0 && name.length < 5 ? <Text>Password Should Be Greater Than 5 Characters</Text> : null}

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
    },
});

export default InputScreen;
