import React from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";

const Welcome = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>

      <View style={styles.view1}>
        <Image
          source={require("../../assets/IMG/blue_bike.png")}
          style={styles.img}
        ></Image>
      </View>

      <View style={styles.view2}>
        <Text style={styles.text1}>POWER BIKE SHOP</Text>
      </View>

      <View>
        <Pressable
          style={styles.Pre}
          onPress={() => {
            navigation.navigate("Bike");
          }}
        >
          <Text style={styles.textPre}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    width: 351,
  },
  view1: {
    width: 359,
    height: 388,
    backgroundColor: "#E941411A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 11,
  },
  view2: {
    marginTop: 21,
  },
  text: {
    fontSize: 26,
    fontWeight: 400,
    textAlign: "center",
  },
  text1: {
    fontSize: 26,
    fontWeight: 700,
    textAlign: "center",
    width: 180,
  },
  img: {
    width: 292,
    height: 270,
  },
  Pre: {
    height: 61,
    width: 340,
    backgroundColor: "#E94141",
    marginTop: 63,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textPre: {
    fontSize: 20,
    fontWeight: 700,
    color: "#ffff",
  },
});

export default Welcome;
