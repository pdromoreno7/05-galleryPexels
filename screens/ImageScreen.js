import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const ImageScreen = ({ route }) => {
  console.log("🚀 ~ file: ImageScreen.js:5 ~ ImageScreen ~ route", route);

  const { image } = route.params;
  return (
    <View>
      <Image
        source={{
          uri: image.src.medium,
          height: 350,
          width: "100%",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ImageScreen;
