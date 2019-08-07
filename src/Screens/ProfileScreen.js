import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Profile",
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons name={focused ? "ios-microphone" : "ios-contact"} size={25} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> ProfileScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
