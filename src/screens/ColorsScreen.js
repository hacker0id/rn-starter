import React, { useState } from "react";
import { View, Button, FlatList } from "react-native";

const ColorsScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <View>
            <Button title="Add a color" onPress={() => {
                setColors([...colors, randomRGB()])
            }} />


            <FlatList data={colors}
                keyExtractor={(item) => {
                    item
                }}
                renderItem={({ item }) => {
                    return <View
                        style={{ height: 100, width: 500, backgroundColor: item, marginVertical: 10 }}

                    >
                    </View>
                }}
            />


        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
};

export default ColorsScreen;
