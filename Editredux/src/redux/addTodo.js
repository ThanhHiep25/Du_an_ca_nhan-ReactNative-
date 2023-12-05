import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import { addTodo } from "./actions";

const AddTodo = ({ todoList, addre }) => {
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <View style={styles.viewFlat}>
            <Text style={styles.textFlat}>{item.name}</Text>
          </View>
        )}
      />
      <View style={styles.viewInput}>
        <TextInput
          style={styles.textIn}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder="TodoName"
        />

        <Pressable
          onPress={() => {
            addre(name);
            setName("");
          }}
        >
          <Text style={styles.text}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({ todoList: state.todoList });
const mapDispatchToProps = (dispatch) => ({
  addre: (name) =>
    dispatch(
      addTodo({
        id: "4234",
        name: name,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

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
  viewFlat: {
    height: 50,
    width: 200,
    borderRadius: 20,
    padding: 10,
    margin: 20,
    backgroundColor: "#B6BBC4",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textFlat: {
    fontSize: 20,
    fontWeight: 600,
  },
});
