import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Tab, TabView } from "@rneui/themed";
import Comments from "./commentSection";
import ProductOptions from "./ProductOptions";
const ItemTabs = () => {
  const [index, setIndex] = React.useState(0);
  const handelclick = (e) => {
    setIndex(e);
    console.log(e);

  };
  return (
    <>
      <Tab
        value={index}
        style={{ backgroundColor: "#FAF9F6", borderRadius: 20, color: "white" }}
        onChange={(e) => handelclick(e)}
        indicatorStyle={{
          backgroundColor: "black",
          height: 3,
        }}
        variant="black"
      >
        <Tab.Item
          title="Selection"
          titleStyle={{ fontSize: 12, color: "black" }}
          icon={{ name: "cart", type: "ionicon", color: "black" }}
        />
        <Tab.Item
          title="Overview"
          titleStyle={{ fontSize: 12, color: "black" }}
          icon={{ name: "timer", type: "ionicon", color: "black" }}
        />
        <Tab.Item
          title="FeedBack"
          titleStyle={{ fontSize: 12, color: "black" }}
          icon={{ name: "heart", type: "ionicon", color: "black" }}
        />

      </Tab>

      <View value={index} onChange={handelclick} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          {index == 0 && <ProductOptions />}
        </TabView.Item>
        <TabView.Item
          style={{ backgroundColor: "white", width: "95%", left: 5 }}
        >
          {index == 1 && (
            <>
              <Text style={{ fontSize: 20, top: 5 }}>
                The iPhone 14 Pro models are much more feature rich than the
                iPhone 14 models, offering camera technology improvements,
                better display capabilities, a faster A16 chip, and more. The
                6.7 iPhone 14 Pro models features flat edges, stainless steel
                enclosure, a textured matte glass back, IP68 water resistance,
                and a Ceramic Shield-protected display. The 48-megapixel lens
                also enables a 2x Telephoto mode that uses the middle 12
                megapixels for full-resolution photos with no digital zoom. This
                joins the existing 3x zoom enabled by the dedicated Telephoto
                lens, which has also been improved. The iPhone 14 Pro models
                support 5G connectivity and uses a new Qualcomm X65 modem
              </Text>
            </>
          )}
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          {index == 2 && <Comments />}
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          {index == 3 && <Comments />}
        </TabView.Item>
      </View>
    </>
  );
};

export default ItemTabs;

const styles = StyleSheet.create({});
