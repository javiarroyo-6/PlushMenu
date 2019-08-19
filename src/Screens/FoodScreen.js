import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  StatusBar
} from "react-native";
import Animated from "react-native-reanimated";
import PopcornModal from "../components/Modals/PopcornModal";

const images = [
  { id: 1, uri: require("../../assets/PopcornChicken.jpg") },
  { id: 2, uri: require("../../assets/PopcornChicken.jpg") },
  { id: 3, uri: require("../../assets/PopcornChicken.jpg") }
];

const HEADER_HEIGHT = Platform.OS == "ios" ? 115 : 70 + StatusBar.currentHeight;

export default class FoodScreen extends Component {
  render() {
    const scrollY = new Animated.Value(0);
    const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
    const headerY = Animated.interpolate(diffClampScrollY, {
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT]
    });
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: HEADER_HEIGHT,
            backgroundColor: "gray",
            zIndex: 1000,
            elevation: 1000,
            transform: [{ translateY: headerY }],
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 45
          }}
        >
          <Text> Plush Food </Text>
        </Animated.View>
        <Animated.ScrollView
          bounces={false}
          scrollEventThrottle={16}
          style={{ paddingTop: HEADER_HEIGHT }}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: scrollY } }
            }
          ])}
        >
          {images.map(image => (
            <View key={image.id} style={{ height: 400, margin: 20 }}>
              <Image
                source={image.uri}
                style={{ flex: 1, height: null, width: null, borderRadius: 10 }}
              />
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
