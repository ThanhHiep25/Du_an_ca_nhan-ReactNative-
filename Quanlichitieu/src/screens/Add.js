import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
var url = "https://65557a0784b36e3a431dc70d.mockapi.io/chitieu";

const Add = () => {
  const navigation = useNavigation();
  const [nameUser, setNameUser] = useState();
  const [nameChiTieu, setNameChiTieu] = useState();
  const [gia, setGia] = useState();
  const [tag, setTag] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.viewHear}>
        <Pressable
          onPress={() => {
            navigation.goBack(setTimeout(3000));
          }}
        >
          <Image
            source={require("../../assets/back.png")}
            style={styles.imgBack}
          />
        </Pressable>
      </View>
      <View style={styles.viewMain}>
        <TextInput
          style={styles.textIn}
          value={nameUser}
          onChangeText={(text) => {
            setNameUser(text);
          }}
          placeholder="Ten nguoi dung"
        />
        <TextInput
          style={styles.textIn}
          value={nameChiTieu}
          onChangeText={(text) => {
            setNameChiTieu(text);
          }}
          placeholder="Ten chi tieu"
        />
        <TextInput
          style={styles.textIn}
          value={gia}
          onChangeText={(text) => {
            setGia(text);
          }}
          placeholder="Gia"
        />
        <TextInput
          style={styles.textIn}
          value={tag}
          onChangeText={(text) => {
            setTag(text);
          }}
          placeholder="Tag"
        />
      </View>

      <View style={styles.viewPost}>
        <Pressable
          onPress={() => {
            fetch(url, {
              method: "POST",
              body: JSON.stringify({
                name: nameUser,
                danhsach: nameChiTieu,
                gia: gia,
                tag: tag,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            setNameChiTieu("");
            setGia("");
            setTag("");
          }}
        >
          <Image
            source={require("../../assets/bookmark.png")}
            style={styles.imgPost}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHear: {
    margin: 20,
  },
  viewMain: {
    margin: 20,
    alignItems: "center",
  },
  viewPost: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgBack: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  imgPost: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  textIn: {
    backgroundColor: "#7ED7C1",
    marginTop: 20,
    height: 50,
    width: 330,
    padding: 20,
    fontSize: 18,
    color: "#ffff",
    fontFamily: "Arial",
    fontWeight: 700,
    borderRadius: 20,
  },
});
