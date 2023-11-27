import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavi;

const styles = StyleSheet.create({});
