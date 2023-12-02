import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import { BikeList } from "../screens/BikeList";
import Pay from "../screens/PayBike";

const Stack = createNativeStackNavigator();
const Appnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen name="Bike" component={BikeList} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Pay" component={Pay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigation;
