import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerLeft: () => (
              <Image
                source={{
                  uri: "https://play-lh.googleusercontent.com/KtFwMsqVzBBpTFc8vR5SZRCNBvqknlWurnzTRl4J-2kdZhoM04LjklX9Vh8pl-fYfpU",
                }}
                style={styles.logoMain}
              />
            ),
            headerRight: () => (
              <Text
                style={{ fontSize: 18 }}
                onPress={() => console.log("search")}
              >
                Search
              </Text>
            ),
            title: "Pexels App",
            headerTitleStyle: {
              fontWeight: "bold",
              textAling: "center",
            },
          }}
        />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
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
