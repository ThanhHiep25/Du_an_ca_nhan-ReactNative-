import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { inc, dec } from "./actions";
import Count from "./count2";


const Counter = ({count, incre, decre }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Increment" onPress={incre} />
      <Button title="Decrement" onPress={decre} />
    </View>
  );
};
const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = (dispatch) => ({
  incre: () => dispatch(inc()),
  decre: () => dispatch(dec()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
