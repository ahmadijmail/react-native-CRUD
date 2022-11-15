import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import BasicSlider from "./cersual";
import ItemTabs from "./ItemTabs";

const OneProduct = ({ route, navigation }) => {
  const { item, otherParam } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity style={styles.brandbutton}>
          <Text style={styles.brandtex}>Apple</Text>
        </TouchableOpacity>
        <Text style={styles.titleStyle}>{item.name}</Text>
        <TouchableOpacity style={styles.sellerbutton}>
          <Text style={styles.selltex}>Best Seller</Text>
        </TouchableOpacity>
        <View style={styles.imageStyle}>
          <BasicSlider />
        </View>
        <Text style={{ top: 50, left: 20 }}>SAR </Text>
        <View style={styles.slide}>

        <Text style={styles.price}>
          {item.price}
          </Text>
            <Image
              style={{
                width: win.width / 4,
                height: win.width / 9,
                // top: 10,
                marginLeft: 200,
               // bottom: 30,
              }}
              source={require("../../assets/aramex-logo-vector.png")}
            ></Image>
         
        
        </View>

        <View style={styles.copon}>
          <Text
            style={{ color: "#32CD32", bottom: "5%", left: "5%" }}
            icon={{ name: "heart", type: "ionicon", color: "black" }}
          >
            Extra 10% : SAVEBIG
            <View>
              <Foundation
                name="ticket"
                size={35}
                color="#32CD32"
                style={{ left: 120, top: "35%" }}
              />
            </View>
          </Text>
        </View>
        <ItemTabs />
      </ScrollView>
    </View>
  );
};

export default OneProduct;
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  brandtex: {
    color: "blue",
    fontWeight: "bold",
  },
  selltex: {
    color: "white",
  },
  copon: {
    marginTop:"5%",
    borderWidth: 2,
    borderColor: "#7FFF00",
    borderStyle: "dashed",
    maxWidth: "90%",
    left: "5%",
    minHeight: 60,
    marginBottom: "3%",
    marginTop: "2%",
  },
  brandbutton: {
    width: 90,
    height: 20,
    borderRadius: 15,
    //  left: "4%",
    top: "2%",
    left: "-4%",
    alignItems: "center",
  },
  sellerbutton: {
    width: 90,
    height: 20,
    borderRadius: 15,
    left: "4%",
    backgroundColor: "#373737",
    alignItems: "center",
  },

  slide:{
    flex: 1,
    flexDirection: "row",
    top:10,
    left:10
  },
  price: {
 
    fontSize: 30,
    fontWeight: "bold",
    left: 50,
     top: 2 ,
  },
  titleStyle: {
    marginTop: "5%",
    marginBottom: "1%",
    fontSize: 30,
    fontWeight: "bold",
    left: "3%",
  },
  description: {
    fontSize: 20,
    padding: 10,
  },
  imageStyle: {
    // flex: 1,
    // width: "90%",
    // height: 200,
    // marginTop: "5%",
    // resizeMode: "contain",
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // opacity: 1,
    // alignContent: "center",
    // alignSelf: "center",
    // marginBottom: "10%",
  },
});

//rnfes
