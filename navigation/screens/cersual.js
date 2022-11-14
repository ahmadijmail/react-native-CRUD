import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Image,
} from "react-native";

const images = [
  {
    id: 1,
    img: require("../../assets/iphone.png"),
    title: "Beautiful Coral Reef",
    color: "#33ccff",
  },
  {
    id: 2,
    img: require("../../assets/iPhone-14-Pro-Max-Transparent-Background.png"),
    title: "Beautiful Sea Wave",
    color: "brown",
  },

  // {
  //   id: 3,
  //   img: require("../../assets/pic3.png"),
  //   title: "Ice Galcier Mystery",
  //   color: "#33ccff",
  // },
];

export default BasicSlider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  let { width: windowWidth, height: windowHeight } = useWindowDimensions();
  windowHeight = windowHeight - 300;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.scrollContainer, { height: windowHeight }]}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {images.map((image, imageIndex) => {
            return (
              <Animated.View style={{ width: windowWidth }} key={imageIndex}>
                <Image source={image.img} style={styles.card} />
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.indicatorContainer}>
        {images.map((image, imageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={[
                styles.normalDots,
                { width },
                { backgroundColor: image.color },
              ]}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 300,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
  },
  scrollContainer: {
    maxHeight: "100%",
  },
  card: {
    flex: 1,
    marginVertical: 10,
borderRadius:10,
    width: "70%",

    overflow: "hidden",
    alignSelf: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,

    marginHorizontal: 4,
  },
  textAreaContainer: {
    width: "100%",
    marginBottom: 10,
  },
  textView: {
    position: "absolute",
    fontSize: 22,
    // fontFamily:"Avenir",
    fontWeight: "600",
    textAlign: "center",
    width: "50%",
  },
});
