import { Heading, View } from "native-base";
import { Platform, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { getRouteName } from "../Tabs/sharedFunction";
function CustomHeader({ navigation }) {
  const [routeName, SetRouteName] = useState("home");
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    navigation.navigate("home");
  };
  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  const handelroutes = () => {
    SetRouteName(getRouteName(navigation));
  };
  useEffect(() => {
    handelroutes();

  }, [navigation.getState()]);
  return (
    <>

      <View style={styles.container} bg="muted.50">
        {routeName === "OneProduct" || routeName === "addProcudt"  &&
          (
            <Ionicons
              onPress={handleNavigate}
              name={Platform.OS === "ios" ? `ios-arrow-back` : "md-arrow-back"}
              size={30}
              color="black"
              style={styles.head}
            />
            //
          )
        }
        <Heading color="#194569" fontSize="20" fontWeight="bold"></Heading>
      </View>

    </>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white'
  },
  headerTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
  },

  head: {
    top: "5%",
  },
});
