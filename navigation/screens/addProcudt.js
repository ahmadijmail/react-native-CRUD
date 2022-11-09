import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import ImagePickerExample from "./imageUploader";

export default () => {
  const [image, setImage] = useState();
  const [isLoading, setloading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { name: "", description: "", price: "" } });
  const onSubmit = async (data) => {
    for (const [key, value] of Object.entries(data)) {
      if (value.length < 1) console.log(key);
    }
    try {
      const response = await axios.post(
        `https://newauthh.herokuapp.com/api/products`,
        {
          name: data.name,
          description: data.description,
          price: data.price,
          image: image,
        }
      );

      if (response) alert("Succefully Added");
    } catch (response) {
      console.log(response, "errrorr");
    }
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.maintt}>Add Product</Text>

      <Text style={styles.label}>Name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{ required: true }}
      />

      <Text style={styles.label}>Description</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="description"
        rules={{ required: true }}
      />

      <Text style={styles.label}>Price</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="numeric"
            style={styles.inputPrice}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="price"
        rules={{ required: true }}
      />
      <ImagePickerExample setImage={setImage} setloading={setloading} />
    
      {image && (
        <View style={styles.button}>
          <Button color title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    height: 40,
    marginTop: 20,
    borderRadius: 4,
    width: 200,
    marginLeft: "24%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F8FF",
  },
  container: {
    padding: 8,
    backgroundColor: "#272343",
  },
  input: {
    backgroundColor: "white",
    borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },

  inputPrice: {
    backgroundColor: "white",
    borderColor: "none",
    height: 40,
    padding: 15,
    borderRadius: 4,
  },

  maintt: {
    color: "white",
    fontSize: 40,
    top: 20,
    marginBottom: 30,
    //justifyContent: "center",
  },
});