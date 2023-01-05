import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getImages } from "../api/pexels";
import ImageList from "../components/ImageList";
import { Button, Input } from "@rneui/themed";

const HomeScreen = ({ openSearch }) => {
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
    <>
      {openSearch && (
        <View style={styles.searchSection}>
          <Input
            placeholder="Busca una foto"
            style={styles.input}
            leftIcon={{ type: "feather", name: "search", color: "#fff" }}
            onChangeText={(value) => setSearchTerm(value)}
            inputContainerStyle={styles.searchInput}
            leftIconContainerStyle={styles.searchLeftIcon}
          />
          <Button
            titleStyle={{
              color: "black",
            }}
            title="Buscar"
            buttonStyle={styles.buttonSearch}
            onPress={() => handleSearch()}
          />
        </View>
      )}
      <View style={styles.container}>
        <Text style={styles.totalResulText}>Resultados</Text>
        <ImageList photos={photos} />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // paddingHorizontal: 5,
    justifyContent: "center",
  },
  totalResulText: {
    textAlign: "right",
    width: "100%",
    marginTop: 20,
    paddingTop: 20,
    paddingRight: 9,
    paddingBottom: 7,
  },
  searchSection: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    paddingRight: 90,
    paddingLeft: 10,
    flex: 1 / 5,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#2C292C",
    borderBottomWidth: 0,
    paddingHorizontal: 4,
  },
  input: {
    color: "#fff",
  },
  searchLeftIcon: {
    paddingStart: 10,
    marginRight: 7,
  },
  buttonSearch: {
    backgroundColor: "#FEBC00",
    marginBottom: 27,
  },
});
