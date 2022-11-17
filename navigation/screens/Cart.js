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
import { useSelector, useDispatch } from "react-redux";
import { productsFetch, deleteProduct } from "../../store/productsSlice";
import { cartActions } from "../../store/cartSlice";
import React, { useState, useEffect } from "react";

export default function Cart({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const data = useSelector((data) => data.cart.cartlist);
  const prices = useSelector((data) => data.cart.totalPrices);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);
  const removeFromCart = (item) => {
    //console.log((Dispatch(addtoCart)));
    dispatch(cartActions.removefromCart(item));
    console.log("eeeee");
  };
  const AddToCart = (item) => {
    //console.log((Dispatch(addtoCart)));
    dispatch(cartActions.addtoCart(item));
    console.log("eeeee");
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
    dispatch(productsFetch());
    console.log(data);
  }, [refreshing, isFocused]);
  return (
    <>
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
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
                  <Text style={styles.titleStyle}>{item.name}</Text>

                  <Image
                    style={styles.imageStyle}
                    source={{ uri: item.image }}
                  />
                  <View style={styles.buttons}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.selectedbutton}
                    >
                      <Text style={{ fontSize: 10 }}>Red</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.selectedbutton}
                    >
                      <Text style={{ fontSize: 10 }}>128GB</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.buttons2}>
                    <TouchableOpacity
                      onPress={() => removeFromCart(item)}
                      style={styles.removeButton}
                    >
                      <Text
                        style={{
                          fontSize: 25,
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 23,
                        color: "black",
                        fontWeight: "bold",
                        height: 35,
                        right: 3,
                        padding: 3,
                      }}
                    >
                      {item.productquantity}
                    </Text>

                    <TouchableOpacity
                      onPress={() => AddToCart(item)}
                      style={styles.selectedbutton2}
                    >
                      <Text
                        style={{
                          fontSize: 25,
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <Text
                    style={{
                      color: "#82ceff",
                      width: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginRight: 12,
                      height: 30,
                      left: 130,
                      bottom: 20,
                      position:'absolute'
                    }}
                  >
                    $ {item.price}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
        <View style={{ backgroundColor: "#FAFCFF" }}>
          <View
            style={{
              flexDirection: "row",
              borderTopWidth: 1,
              marginBottom: 5,
              borderTopEndRadius: 10,
              backgroundColor: "#FAFCFF",
              height: 50,
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 20, left: 10, top: 15 }}>Total :</Text>
            <Text
              style={{
                fontSize: 27,
                left: "17%",
              //  padding: 5,
                color: "#82ceff",
                top: 10,
                position: "absolute",
                fontWeight: "bold",
              }}
            >
              {prices}.00 $
            </Text>
            <Pressable style={styles.CheckOutButton}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
              >
                Checkout
              </Text>
            </Pressable>
          </View>
        </View>
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
    // height: deviceWidth - 150,
    alignItems: "center",
    marginTop: 25,

    marginLeft: 10,
  },

  buttons: {
    //marginTop: "0%",
    justifyContent: "space-between",
    alignItems: "center",

    flex: 1,
    flexDirection: "row",
    width: "30%",
    maxWidth: "90%",
    left: "15%",
  },

  buttons2: {
    alignItems: "center",
    borderRadius: 50,
    flex: 1,
    flexDirection: "row",
    width: "30%",
    // left: "170%",
    left:260,
    bottom: "6%",
  },

  removeButton: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: "#f4f0ec",
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
  
  },

  selectedbutton2: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: "#f4f0ec",
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
   // borderWidth: 1,
  },
  selectedbutton: {
    borderRadius: 5,
    borderColor: "black",
    color: "blue",
    borderWidth: 1,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f0ec",
    marginRight: 12,
    height: 25,
    left: 110,
    bottom: 70,
  },

  CheckOutButton: {
    borderRadius: 7,
    borderColor: "black",
    color: "blue",
    borderWidth: 1,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#82ceff",
    //marginRight: 5,
    height: 50,
    left: "380%",
    top: 2,
    // left: 80,
    // bottom: 1,
    //bottom: 70,
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
    width: deviceWidth - offset + 20,
    backgroundColor: "#FAFCFF",
    height: 150,

    borderRadius: radius,
    borderWidth: 1,
    elevation: 9,
  },
  imageStyle: {
    height: 110,
    width: 110,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomEndRadius: radius,
    borderBottomStartRadius: radius,
    opacity: 1,
    //
    right: 125,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: "800",
    top: 15,
    left: 130,
  },
  categoryStyle: {
    fontWeight: "200",
  },

  iconLabelStyle: {
    flexDirection: "row",
    //height: "20%",
    // width: "39%",
    //marginBottom: 90,
  },
});
