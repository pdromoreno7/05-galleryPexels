import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const CardImage = ({ image }) => {
  return (
    <View style={styles.cardImage}>
      <Image
        source={{
          uri: image.src.medium
            ? image.src.medium
            : "https://picsum.photos/200/200?image=10",
        }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    width: "49.5%",
    margin: 4,
    justifyContent: "space-between",
    backgroundColor: "#2c292c",
    borderWidth: 0,
    borderRadius: 10,
  },
});

export default CardImage;
