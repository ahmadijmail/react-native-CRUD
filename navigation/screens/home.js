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
  ScrollView
} from "react-native";

import React,{ useState, useEffect } from "react";
import axios from "axios";
import Ddialog from "./dialog";
import { withTheme } from "react-native-elements";
export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  
  const getMovies = async () => {
    try {
      let response = await fetch("https://newauthh.herokuapp.com/api/products");
      const json = await response.json();
      setData(json);
      console.log("caleddd");
    } catch (error) {
      console.error(error);
    }
  };
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
   
    wait(2000).then(() => {setRefreshing(false),  getMovies()});
  }, []);

  const deletehandle = async (id) => {

    try {
      const response = await axios.delete(
        `https://newauthh.herokuapp.com/api/products/${id}`
      );
 
  
      if (response) console.log("deleted");
    } catch (response) {
      console.log(response, "errrorr");
    }
  };

  useEffect(() => {
    getMovies();
    console.log("hii");
  }, [refreshing]);
  return (
    <>

        <ScrollView
         refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
          <FlatList
            data={data}
            keyExtractor={({ _id }, index) => _id}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <View style={styles.cardContainer}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: item.image }}
                  />

                  <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{item.name}</Text>
                    <Text isTruncated maxW="300" w="80%">
                      {item.description}
                    </Text>

                    <Button
                      style={styles.button}
                      title="Delete"
                      onPress={() => deletehandle(item._id)}
                    />

                    <Ddialog item={item} />
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>

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
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "39%",
    height: "28%",
    backgroundColor: "red",
    color: "black",
    width: "30%",
    left: "70%",
    bottom: "2%",
    borderRadius: 10,
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
    height: 220,

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
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "800",
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
