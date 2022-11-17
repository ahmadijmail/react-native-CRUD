import React, { useState } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ImagePickerExample({ setImage, oldimage }) {
  const [imgggg, setimgg] = useState(oldimage);
  const [image, setImages] = useState();
  const [isLoading, setloading] = useState(false);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection:true
    });

    if (result.cancelled === false) {
      let newfule = {
        uri: result.uri,
        type: `test/${result.uri.split(".")[1]}`,
        name: `test.${result.uri.split(".")[1]}`,
      };

      handelupload(newfule);
    }
  };
  const handelupload = async (image) => {
    const data = new FormData();
    setloading(true);
    data.append("file", image);
    data.append("upload_preset", "mobphotos");
    data.append("cloud_name", "daah9umqu");
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/daah9umqu/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const json = await response.json();
      setImage(json.url);
      setImages(json.url);
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={pickImage}>
        <Text>
          Upload Image
          {"  "}
        </Text>
        <FontAwesome5 name="image" size={25} />
      </Pressable>

      {isLoading && <ActivityIndicator size="large" style={{ }} />}
      {imgggg && (
        <Image
          source={image ? { uri: image } : { uri: imgggg }}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 50,
    alignContent: "center",
    backgroundColor: "white",
    // width: "100%",
    // height: "100%",
  },

  button: {
    height: 60,
    borderRadius: 10,
    width: 150,
    bottom: 50,
    left: 60,
    borderWidth: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e1e0dd",
  },

  image: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
});
