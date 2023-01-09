import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { Avatar, Button } from "@rneui/themed";

const ImageScreen = ({ route }) => {
  const { image } = route.params;
  console.log("🚀 ~ file: ImageScreen.js:7 ~ ImageScreen ~ image", image);

  const handlePress = async () => await Linking.openURL(image.photographer_url);

  return (
    <View>
      <Image
        source={{
          uri: image.src.large,
          height: 350,
          width: "100%",
        }}
      />
      <View
        style={{
          paddingVertical: 18,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          padding: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            title={image.photographer
              .split(" ")
              .map((string) => string[0])
              .join("")
              .toUpperCase()}
            rounded
            containerStyle={{ backgroundColor: image.avg_color }}
          />
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.textPhotographer}>{image.photographer}</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Descargar"
          buttonStyle={{ backgroundColor: "#FEBC00" }}
          onPress={() => handleDownload()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPhotographer: {
    // backgroundColor: "#0D0D0D",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  textPhotographer: {
    fontSize: 18,
    marginStart: 8,
    color: "#7f8c8d",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ImageScreen;
