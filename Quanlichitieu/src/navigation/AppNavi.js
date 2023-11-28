import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Add from "../screens/Add";

const Stack = createNativeStackNavigator();

const AppNavi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavi;

const styles = StyleSheet.create({});
