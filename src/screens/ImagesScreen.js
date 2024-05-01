import React from "react";
import { View, Image, Text } from "react-native";
import ImageDetail from "./components/ImageDetail";
import { ScrollView } from "react-native-gesture-handler";
const ImagesScreen = () => {
    return (
        <ScrollView>
            <ImageDetail
                imageSource={require('../../assets/images/forest.jpg')}
                imageHeight={300}
                imageWidth={500}
                imageTitle={"Forest"}
            />

            <ImageDetail
                imageSource={require('../../assets/images/beach.jpg')}
                imageHeight={300}
                imageWidth={500}
                imageTitle={"Beach"}
            />

            <ImageDetail
                imageSource={require('../../assets/images/mountain.jpg')}
                imageHeight={300}
                imageWidth={500}
                imageTitle={"Mountain"}
            />
        </ScrollView>
    );
};
export default ImagesScreen;
