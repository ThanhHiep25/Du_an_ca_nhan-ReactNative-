import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import { addTodo } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const hanldClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: name,
      })
    );
  };


  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.textIn}
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            placeholder="TodoName"
          />

          <Pressable onPress={()=>{hanldClick()}}>
            <Text style={styles.text}>Add</Text>
          </Pressable>
        </View>
      </View>
    </Provider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewInput: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textIn: {
    height: 50,
    width: 300,
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#96EFFF",
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
  },
});
