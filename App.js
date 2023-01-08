import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: "Home",
            headerLeft: () => (
              <Image
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/015/568/289/original/app-logo-minimalist-logo-company-logo-free-vector.jpg",
                }}
                style={styles.logoMain}
              />
            ),
            headerRight: () => (
              <Text
                style={{ fontSize: 18 }}
                onPress={() => setOpenSearch(!openSearch)}
              >
                {openSearch ? "Close" : "Search"}
              </Text>
            ),
            title: "Wallpaper Gallery",
            headerTitleStyle: {
              fontWeight: "bold",
              textAling: "center",
            },
          }}
        >
          {(props) => <HomeScreen {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{
            headerStyle: {
              backgroundColor: "#0D0D0D",
            },
            title: "Wallpaper Gallery",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoMain: {
    width: 30,
    height: 30,
    borderRadius: 5,
    margin: 5,
  },
});
