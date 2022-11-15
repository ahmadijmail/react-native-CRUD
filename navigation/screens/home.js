import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Pressable,
  Button,
  Text,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import BasicSlider from './cersual'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Ddialog from "./dialog";
export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  const getMovies = async () => {
    try {
      let response = await fetch("https://newauthh.herokuapp.com/api/products");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
      getMovies();
    });
  }, []);

  const deletehandle = async (id) => {
    Alert.alert("Delet Product", "Are you sure you wanna delete?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          try {
            const response = await axios.delete(
              `https://newauthh.herokuapp.com/api/products/${id}`
            );
            getMovies();
            if (response) alert("deleted");
          } catch (response) {
            console.log(response, "errrorr");
          }
        },
      },
    ]);
  };

  const handleNavigation = (nav, page, s) => {
    try {
      setSelected(s);
      nav.navigate(page);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMovies();
  }, [refreshing, isFocused]);
  return (
    <>
  
      <View style={{width:"100%", height:"100%"}}>

        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("OneProduct", { item })}
            >
              <View style={styles.container}>
                <View style={styles.cardContainer}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: item.image }}
                  />

                  <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{item.name}</Text>
                    <Text isTruncated max="10" w="10%" numberOfLines={1}>
                      {item.description}
                    </Text>
                    <Text
                      style={{
                        color: "black",
                        top: 30,
                        left: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {item.price}$
                    </Text>
                    <TouchableOpacity
                      style={styles.button31}
                      title="Delete"
                      onPress={() => deletehandle(item._id)}
                    >
                      <Text style={{ color: "white" }}>Delete</Text>
                    </TouchableOpacity>
                    <Ddialog item={item} />
                  </View>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </>
  );
}

const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    height: deviceWidth - 150,
    alignItems: "center",
    marginTop: 25,

    marginLeft: 10,
  },
  button31: {
    width: 70,
    height: "17%",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    marginLeft: "55%",
    bottom: "1%",
  },

  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginLeft: "70%",
    width: "26%",
    height: "30%",
    backgroundColor: "blue",
    top: -50,
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: "#FAFCFF",
    height: 240,

    borderRadius: radius,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 1,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "800",
    // flex: 1
  },
  categoryStyle: {
    fontWeight: "200",
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: "row",
    //height: "20%",
    // width: "39%",
    marginBottom: 90,
  },
});
