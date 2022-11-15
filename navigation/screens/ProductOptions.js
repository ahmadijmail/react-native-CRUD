import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";

const ProductOptions = () => {
  const [isSelected, setIsSelected] = useState({ second: true });
  const [isSelected2, setIsSelected2] = useState({ sixth: true });
  const buttonHandler = (e) => {
    setIsSelected((prevState) => ({
      [e]: true,
    }));
  };

  const buttonHandler2 = (e) => {
    setIsSelected2((prevState) => ({
      [e]: true,
    }));
  };

  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 23, left: 5, top: 2 }}>
        Internal Memory
      </Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => buttonHandler("first")}
          style={
            isSelected.first == true
              ? styles.selectedbutton
              : styles.notSelectedbutt
          }
        >
          <Text>128GB</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          onPress={() => buttonHandler("second")}
          style={
            isSelected.second == true
              ? styles.selectedbutton
              : styles.notSelectedbutt
          }
        >
          <Text>256GB</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          onPress={() => buttonHandler("third")}
          style={
            isSelected.third == true
              ? styles.selectedbutton
              : styles.notSelectedbutt
          }
        >
          <Text>512GB</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontWeight: "bold", fontSize: 25, left: 5, top: 2 }}>
        Color
      </Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => buttonHandler2("fourth")}
          style={
            isSelected2.fourth == true
              ? styles.selectedbutton
              : styles.notSelectedbutt
          }
        >
          <Text>Red</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          onPress={() => buttonHandler2("fifth")}
          style={
            isSelected2.fifth == true
              ? styles.selectedbutton
              : styles.notSelectedbutt
          }
        >
          <Text>Black</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          onPress={() => buttonHandler2("sixth")}
          style={
            isSelected2.sixth == true
              ? styles.selectedbutton
              : styles.notSelectedbutt
          }
        >
          <Text>Silver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductOptions;

const styles = StyleSheet.create({
  buttons: {
    marginLeft: "20%",
    marginTop: "3%",
    justifyContent: "space-between",
    alignItems: "center",

    flex: 1,
    flexDirection: "row",
    width: "30%",
    maxWidth: "90%",
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },

  selectedbutton: {
    borderRadius: 5,
    borderColor: "black",
    color: "blue",
    borderWidth: 2.5,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e0dd",
    height: 40,
  },

  notSelectedbutt: {
    borderRadius: 5,
    borderWidth: 1,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});
