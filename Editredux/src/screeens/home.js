import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import { addTodo } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "../redux/addTodo";

const Home = () => {

  return (
    <Provider store={store}>
     <AddTodo/>
    </Provider>
  );
};

export default Home;

