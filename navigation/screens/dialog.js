import React, { useState } from "react";
import { Button, StyleSheet, View, Image } from "react-native";
import Dialog from "react-native-dialog";
import axios from "axios";
import ImagePickerExample from "./imageUploader";
export default function Ddialog({ item }) {
  const [items, setItems] = useState(item);
  const [image, setImage] = useState();
  const [visible, setVisible] = useState(false);

  const update = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handelUpdate = async (item) => {
    try {
      const response = await axios.put(
        `https://newauthh.herokuapp.com/api/products/${items._id}`,
        {
          name: items.name,
          description: items.description,
          price: items.price,
          image: image?image:items.name,
        }
      );
      if (response) setVisible(false);
      alert("Updated Sucsessfully");
    } catch (response) {
      console.log(response, "errrorr");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="update" color onPress={update} />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Update Product</Dialog.Title>
        <Dialog.Input
          label="Name"
          defaultValue={items.name}
          onChangeText={(text) => {
            items.name = text;
          }}
        ></Dialog.Input>
        <Dialog.Input
          label="Description"
          defaultValue={items.description}
          onChangeText={(text) => {
            items.description = text;
          }}
        ></Dialog.Input>
        <Dialog.Input
          label="Price"
          defaultValue={JSON.stringify(items.price)}
          onChangeText={(text) => {
            items.price = text;
          }}
        ></Dialog.Input>
        {/* <Dialog.Input
          label="Image"
          defaultValue={items.image}
          onChangeText={(text) => {
            items.image = image;
          }}
        ></Dialog.Input> */}

       
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
    color: "white",
    width: "30%",
    left: "70%",
    bottom: "30%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  imgg: {
    marginLeft: "20%",
  },
});
