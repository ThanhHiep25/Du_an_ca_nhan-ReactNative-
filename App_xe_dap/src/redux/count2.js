import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { inc, dec } from "./actions";

const Count = ({ count, inc, dec }) => {
  return (
    <View style={styles.container}>
      <View style={styles.view_cart}>
        <Image
          source={require("../../assets/IMG/shopping-cart.png")}
          style={styles.imgCart}
        />
        <Text style={styles.textCart}>{count}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({ count: state.count });

export default connect(mapStateToProps)(Count);

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    margin: 20,
  },
  view_cart: {
    flexDirection: "row",
  },
  imgCart: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  textCart:{
    color:'red',
    fontWeight: 700,
    fontSize: 16,
    marginLeft:5
  }
});
