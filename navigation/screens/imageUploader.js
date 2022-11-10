import React, { useState } from "react";
import { Button, Image, View, Platform, StyleSheet,ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
export default function ImagePickerExample({ setImage ,oldimage}) {
  const [imgggg, setimgg]=useState(oldimage)
  const [image, setImages] = useState();
  const [isLoading, setloading] = useState(false);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
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
    setloading(true)
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
      setloading(false)
      console.log(json.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          //color="#000000"
          title="Upload Image"
          onPress={pickImage}
        />
      </View>
   
      {isLoading&& <ActivityIndicator size="large"  style={{right:'65%'}}/>}
      {imgggg && <Image source={image?{uri:image}: {uri:imgggg}} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 70,
  },

  button: {
    height: 40,
    borderRadius: 4,
    width: 150,
    right: 70,
    bottom: 50,
    //color:'black',
  //  backgroundColor: "#F0F8FF",
  },

  image: {
    //marginLeft: "50%",
    width: 200,
    right:90,
    height: 100,
    borderRadius: 10,
   // bottom: 40,
  },
});
