import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View, Image, Pressable, Text } from "react-native";
import Dialog from "react-native-dialog";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { editProduct } from "../../store/productsSlice";
import ImagePickerExample from "./imageUploader";
export default function Ddialog({ item }) {
  const [items, setItems] = useState(item);
  const [updatedItems, setupdatedItems] = useState({
    name: items.name,
    description: items.description,
    price: items.price,
    image: image ? image : items.image,
    itemid: items._id,
  });
  const [image, setImage] = useState();

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const update = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handelUpdate = async (items) => {
    dispatch(
      editProduct({
        name: updatedItems.name,
        description: updatedItems.description,
        price: updatedItems.price,
        image: image ? image : updatedItems.image,
        itemid: items._id,
      })
    );
    setVisible(false);

  };



  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonup} onPress={update}>
        <Text style={{ color: "white" }}>Update</Text>
      </Pressable>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Update Product</Dialog.Title>
        <Dialog.Input
          label="Name"
          defaultValue={items.name}
          onChangeText={(text) => {
            updatedItems.name = text;
          }}
        ></Dialog.Input>
        <Dialog.Input
          label="Description"
          defaultValue={items.description}
          onChangeText={(text) => {
            updatedItems.description = text;
          }}
        ></Dialog.Input>
        <Dialog.Input
          label="Price"
          defaultValue={JSON.stringify(items.price)}
          onChangeText={(text) => {
            updatedItems.price = text;
          }}
        ></Dialog.Input>

        <View style={styles.imgg}>
          <ImagePickerExample setImage={setImage} oldimage={items.image} />
        </View>

        <Dialog.Description>
          Do you want to Update this Product? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />

        <Dialog.Button label="Update" onPress={() => handelUpdate(items)} />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    // backgroundColor: "blue",
    // color: "white",
    //width: "30%",
    //left: "70%",
    // bottom: "30%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  imgg: {
    marginLeft: "20%",
  },

  buttonup: {
    width: 70,
    height: "41%",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    marginLeft: "77%",
    bottom: "73%",
  },
});
