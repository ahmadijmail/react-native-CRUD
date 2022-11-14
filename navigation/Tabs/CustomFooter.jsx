import { Text, Icon, HStack, Center, Pressable, View } from "native-base";
import { StyleSheet } from "react-native";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { getRouteName } from "./sharedFunction";
const CustomFooter = ({ navigation }) => {
  let route = getRouteName(navigation);
  const [selected, setSelected] = useState(0);
  const handleNavigation = (nav, page, s) => {
    try {
      setSelected(s);
      nav.navigate(page);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <HStack
        bg="muted.50"
        alignItems="center"
        safeAreaBottom
        shadow={6}
        borderTopWidth={1}
        borderColor="muted.100"
        justifyContent="space-around"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        style={styles.shadow}
      >
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => handleNavigation(navigation, "home", 0)}
        >
          <Center>
            <Feather
              name="home"
              size={22}
              color={route === "home" ? "#02416D" : "#000"}
            />
            <Text color="#194569" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>

        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => handleNavigation(navigation, "addProcudt", 2)}
        >
          <Center>
            <Ionicons
              name="receipt-outline"
              size={24}
              color={selected === 2 ? "#02416D" : "#000"}
            />
            <Text color="#194569" fontSize="12">
              Add Product
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </>
  );
};

export default CustomFooter;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 25,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
