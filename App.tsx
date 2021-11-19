import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemsScreen } from "./src/Screens/ItemsScreen";
import { ProductScreen } from "./src/Screens/ProductScreen";
import { StackScreen } from "./src/helpers/types";

const Stack = createNativeStackNavigator<StackScreen>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Items">
        <Stack.Screen name="Items" component={ItemsScreen} />
        <Stack.Screen name="Products" component={ProductScreen} options={{headerShown: false}} />
      </Stack.Navigator>
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
});
