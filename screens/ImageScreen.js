import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@rneui/themed";
import { getImages } from "../api/pexels";
import ImageList from "../components/ImageList";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const ImageScreen = ({ route }) => {
  const { image } = route.params;

  const [images, setImages] = useState([]);

  const loadImages = async (term) => {
    const res = await getImages(term);
    setImages(res.data.photos);
  };

  const saveFile = async (fileUri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);
    }
  };

  const downloadFile = async () => {
    let fileUri = FileSystem.documentDirectory + image.id + ".jpeg";

    try {
      const { uri } = await FileSystem.downloadAsync(
        image.src.large2x,
        fileUri
      );
      saveFile(uri);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = async () => {
    downloadFile();
  };

  useEffect(() => {
    loadImages(image.alt);
  }, []);

  const handlePress = async () => await Linking.openURL(image.photographer_url);

  return (
    <View>
      <Image
        source={{
          uri: image.src.large2x,
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
      <View>
        <ImageList photos={images} />
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
