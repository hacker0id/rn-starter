import React from "react";
import { View, Image, Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
const ImagesScreen = ({ imageHeight, imageWidth, imageTitle, imageSource }) => {
    return (
        <View>

            <Image source={imageSource} style={{ height: imageHeight, width: imageWidth, marginBottom: 10 }} />
            <Text style={{ marginBottom: 10, fontSize: 18 }}>{imageTitle}</Text>

        </View>
    );
};
export default ImagesScreen;