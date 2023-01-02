import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getImages } from "../api/pexels";
import ImageList from "../components/ImageList";

const HomeScreen = () => {
  const [photos, setPhostos] = useState([]);

  const loadImages = async () => {
    const res = await getImages();
    setPhostos(res.data.photos);
    console.log("🚀 ~ file: HomeScreen.js:8 ~ loadImages ~ res", res.headers);
  };

  useEffect(() => {
    loadImages();
  }, []);
  return (
    <View>
      <ImageList photos={photos} />
    </View>
  );
};

export default HomeScreen;
