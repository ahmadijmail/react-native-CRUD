import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import ImagePickerExample from "./imageUploader";
import { SelectList } from "react-native-dropdown-select-list";

export default () => {
  const [image, setImage] = useState("");
  const [isLoading, setloading] = useState(false);
  const [selected, setSelected] = React.useState([]);

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Laptop" },
  ]
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { name: "", description: "", price: "" } });
  const onSubmit = async (data) => {
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

      <Text style={styles.label}>
        Name
        <Text style={{ color: "red" }}> *</Text>
      </Text>
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

      <Text style={styles.label}>
        Description
        <Text style={{ color: "red" }}> *</Text>
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            numberOfLines={3}
            style={styles.inputdes}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="description"
        rules={{ required: true }}
      />
      <View>
        <Text style={styles.label}>
          Price
          <Text style={{ color: "red" }}> *</Text>
        </Text>
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
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          boxStyles={{ width: 200, left: 170, bottom: 50, height: 50, alignItems:'center' }}
          dropdownStyles={{
            width: 200,
            left: 170,
            bottom: 55,
            position: "relative",
          }}
          save="value"
        />
        <View style={styles.imgbutton}>
          <ImagePickerExample setImage={setImage} setloading={setloading} />
        </View>
      </View>
      <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={{ color: "white" }}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "black",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    height: 40,
    bottom: "5%",
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#4681f4",
    alignItems: "center",
    justifyContent: "center",
  },

  inputdes: {
    backgroundColor: "white",
    height: 80,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
  },
  container: {
    padding: 8,
    // flex:1
    position: "relative",
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "white",
    //  borderColor: "none",
    //height: 40,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
  },

  inputPrice: {
    backgroundColor: "white",
    // borderColor: "none",
     height: 50,
    padding: 15,
    width: 140,
    borderColor: "black",
    justifyContent: "center",
    borderWidth: 0.5,
    borderRadius: 10,
  },

  maintt: {
    color: "black",
    fontSize: 40,
    top: 20,
    marginBottom: 30,
    //justifyContent: "center",
  },

  imgbutton: {
    // left: "40%",
    // bottom: "10%",
  },
});
