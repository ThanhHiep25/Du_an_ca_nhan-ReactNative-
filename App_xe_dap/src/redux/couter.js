import React, { useState } from "react";
import { View, Text, Button, Image, Pressable, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { inc, dec } from "./actions";
import Count from "./count2";

const Counter = ({ count, incre, decre }) => {
  const [checked, setChecked] = useState([]);
  const hanldCheck = (id) => {
    if (!checked.includes(id)) {
      setChecked([...checked, id]);
      incre()
    } else {
      setChecked(checked.filter((checkedID) => checkedID !== id));
      decre()
    }
  };
  return (
    <View>
      <Pressable
        onPress={() => {
          hanldCheck();
        }}
      >
        {checked.includes() ? (
          <Image
            source={require("../../assets/IMG/heart-red.png")}
            style={styles.imgHeart}
          />
        ) : (
          <Image
            source={require("../../assets/IMG/heart.png")}
            style={styles.imgHeart}
          />
        )}
      </Pressable>
    </View>
  );
};
const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = (dispatch) => ({
  incre: () => dispatch(inc()),
  decre: () => dispatch(dec()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  imgHeart: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
