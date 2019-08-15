import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import plush from "../../assets/plushoutline.png";
import { Button } from "react-native-paper";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon="person"
          mode="outlined"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          Login
        </Button>
        <Button
          icon="person"
          mode="contained"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          Sign Up
        </Button>
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
