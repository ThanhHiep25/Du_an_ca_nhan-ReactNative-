import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import ReactPlayer from "react-player/youtube";
import dataYtb from "../../data";

const Home = () => {
  const [isPlaying, setPlaying] = useState(false);
  const playerRef = useRef(null);
  const [checked, setChecked] = useState([]);
  const [checkdis, setCheckDis] = useState([]);
  const [modal, setModal] = useState(false);

  const handleCheck = (id) => {
    if (!checked.includes(id)) {
      setChecked([...checked, id]);
    } else {
      setChecked(checked.filter((checkedID) => checkedID !== id));
    }
  };

  const handleCheckDis = (id) => {
    if (!checkdis.includes(id)) {
      setCheckDis([...checkdis, id]);
    } else {
      setCheckDis(checkdis.filter((checkedID) => checkedID !== id));
    }
  };

  const handlePress = () => {
    // Nếu đang phát thì dừng, ngược lại thì tiếp tục phát
    setPlaying(!isPlaying); // Giá trị ngược của của nó
  };

  // Hàm xử lý sự kiện khi video được sẵn sàng
  const handleReady = () => {
    // Kiểm tra nếu đang phát thì tạm dừng
    if (isPlaying) {
      playerRef.current.seekTo(0); // Di chuyển đến thời điểm 0 để tạm dừng
      setPlaying(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewbar}>
        <View style={styles.viewbar_1}>
          <Text style={styles.textBar}>Youtube</Text>
          <Image
            source={require("../../assets/IMG/logoytb.png")}
            style={styles.imgLogo}
          />
        </View>
        <Pressable onPress={() => setModal(true)}>
          <Image
            source={require("../../assets/IMG/user.png")}
            style={styles.imgLogo}
          />
        </Pressable>
      </View>

      <View style={styles.viewSearch}>
        <TextInput style={styles.textInSearch} placeholder="Search..." />
      </View>

      <ScrollView style={styles.viewFlat}>
        <FlatList
          data={dataYtb}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.viewMusic}>
              <TouchableOpacity
                style={styles.videoContainer}
                onPress={handlePress}
              >
                <ReactPlayer
                  ref={playerRef}
                  url={item.linkytb}
                  width={"100%"}
                  height={220}
                  playing={isPlaying}
                  controls={true} // thanh điều khiển
                  onReady={handleReady}
                  style={styles.video}
                />
              </TouchableOpacity>
              <Text style={styles.textMusic}>{item.nameMusic}</Text>
              <View style={styles.viewLike}>
                <Text style={styles.textMusic}>{item.name}</Text>
                <Pressable
                  onPress={() => {
                    handleCheck(item.id);
                  }}
                >
                  {checked.includes(item.id) ? (
                    <Image
                      source={require("../../assets/IMG/like.png")}
                      style={styles.imgbar}
                    />
                  ) : (
                    <Image
                      source={require("../../assets/IMG/un_like.png")}
                      style={styles.imgbar}
                    />
                  )}
                </Pressable>
                <Pressable
                  onPress={() => {
                    handleCheckDis(item.id);
                  }}
                >
                  {checkdis.includes(item.id) ? (
                    <Image
                      source={require("../../assets/IMG/chose_dis.png")}
                      style={styles.imgbar}
                    />
                  ) : (
                    <Image
                      source={require("../../assets/IMG/dislike.png")}
                      style={styles.imgbar}
                    />
                  )}
                </Pressable>

                <Pressable style={styles.Pre}>
                  <Text style={styles.textPre}>Yêu thích</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </ScrollView>

      <Modal
        animationType="fade"
        visible={modal}
        transparent={true}
        onRequestClose={() => {
          alert("close");
          setModal(!modal);
        }}
      >
        <View style={styles.viewModal}>
          <Image
            source={require("../../assets/IMG/user.png")}
            style={styles.imgLogo}
          />
          <Text style={styles.textModal}>Nguyen Hiep</Text>
          <Text style={styles.textModal1}>hiepnguyen.....@gmail.com</Text>
        </View>
        <Pressable style={styles.PreModal} onPress={() => setModal(!modal)}>
          <Text style={styles.textPreModal}>Đóng</Text>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewbar: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  viewbar_1: {
    flexDirection: "row",
    alignItems: "center",
  },
  videoContainer: {
    borderRadius: 10,
  },
  viewFlat: {
    margin: 20,
  },
  viewMusic: {
    marginBottom: 40,
  },
  viewLike: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewModal: {
    backgroundColor: "#555252",
    height: 300,
    width: 300,
    marginTop: 80,
    borderRadius: 20,
    padding: 20,
  },
  viewSearch: {
    margin: 20,
    flexDirection: "row",
  },
  textBar: {
    fontSize: 30,
    fontWeight: 700,
  },
  imgLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
  },
  imgbar: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginTop: 10,
  },
  textMusic: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 10,
  },
  textPre: {
    fontSize: 16,
    fontWeight: 600,
  },
  textModal: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
  },
  textModal1: {
    color: "#fff",
    fontSize: 14,
  },
  textPreModal: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textInSearch:{
    padding: 10,
    backgroundColor:'#b9b9b9',
    borderRadius: 20,
    
  },
  Pre: {
    padding: 5,
    backgroundColor: "#B6BBC4",
    borderRadius: 20,
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  PreModal: {
    height: 40,
    width: 100,
    backgroundColor: "#555252",
    marginTop: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
