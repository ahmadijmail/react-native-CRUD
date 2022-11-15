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
import { color } from "react-native-reanimated";
import BasicSlider from "./cersual";
const OneProduct = ({ route, navigation }) => {
  const { item, otherParam } = route.params;
  console.log(item);
  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableOpacity style={styles.brandbutton}>
            <Text style={styles.brandtex}>Apple</Text>
          </TouchableOpacity>
          <Text style={styles.titleStyle}>{item.name}</Text>
          <TouchableOpacity style={styles.sellerbutton}>
            <Text style={styles.selltex}>Best Seller</Text>
          </TouchableOpacity>
          {/* <Image style={styles.imageStyle} source={{ uri: item.image }}></Image> */}

          <View style={styles.imageStyle}>
            <BasicSlider />
          </View>
          <View>
            <Image
              style={{
                width: win.width / 5,
                height: win.width / 9,
                top: 46,
                left: "70%",
              }}
              source={require("../../assets/aramex-logo-vector.png")}
            ></Image>
          </View>
          <Text style={{ top: 23, left: "2%" }}>SAR </Text>
          <Text style={styles.price}> {item.price} </Text>
          <View style={styles.copon}>
            <Text style={{color:"#7FFF00"}}>Extra 10%: SAVEMONY</Text>
          </View>

          <Text style={styles.description}>
            In any business environment, partnerships between organizations are
            common for lead referral sharing, co-sponsored marketing
            initiatives, and joint product or service distribution. Developing
            these relationships often starts by sending a business introduction
            email to request a conference call or meeting for further
            discussion.
          </Text>
        </ScrollView>
      </View>
    </>
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
    padding:20,
 maxWidth:"90%",
 left:20,
marginBottom:"5%"
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
  price: {
    fontSize: 25,
    fontWeight: "bold",
    left: "9%",
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
