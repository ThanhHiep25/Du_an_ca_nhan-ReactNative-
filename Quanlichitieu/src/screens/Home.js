import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";

var url = "https://65557a0784b36e3a431dc70d.mockapi.io/chitieu";

const Home = () => {
  const [state, setState] = useState();
  const navigation = useNavigation();

  const fetchData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          source={{
            uri: "https://cdn.glitch.global/a2f08375-f202-47c4-8950-a18cdb1db74f/b.jpg",
          }}
          style={styles.imguser}
        />
        <Text style={styles.textUser}>Name here</Text>
      </View>

      <View style={styles.view2}>
        <FlatList
          data={state}
          renderItem={({ item }) => (
            <ScrollView style={styles.scrollView}>
              <View style={styles.view3}>
                <Text style={styles.textChitieu}>{item.danhsach}</Text>
                <View style={styles.view3_1}>
                  <Pressable>
                    <Image
                      source={require("../../assets/edit.png")}
                      style={styles.imgEdit}
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      var link = url + "/" + item.id;
                      fetch(link, {
                        method: "DELETE",
                      })
                      .then((data)=>{
                        fetchData()
                      })
                    }}
                  >
                    <Image
                      source={require("../../assets/delete-button.png")}
                      style={styles.imgDelete}
                    />
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          )}
        />
        <View style={styles.view4}>
          <Pressable
            onPress={() => {
              navigation.navigate("add");
            }}
          >
            <Image
              source={require("../../assets/add-file.png")}
              style={styles.imgAdd}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5FBDFF",
  },
  view1: {
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  view2: {
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: "#ffff",
    padding: 30,
  },
  view3: {
    backgroundColor: "#7ED7C1",
    marginTop: 20,
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,
  },
  view3_1: {
    flexDirection: "row",
    alignItems: "center",
  },
  view4: {
    alignItems: "center",
    justifyContent: "center ",
    margin: 10,
  },
  imguser: {
    height: 80,
    width: 80,
    resizeMode: "contain",
    borderRadius: 50,
  },
  imgEdit: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  imgDelete: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginLeft: 30,
  },
  imgAdd: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  textUser: {
    marginLeft: 30,
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: 700,
  },
  textChitieu: {
    fontSize: 18,
    fontFamily: "Arial",
    fontWeight: 700,
    color: "#fff",
  },
  scrollView: {
    height: 100,
  },
});
