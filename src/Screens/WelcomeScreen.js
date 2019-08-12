import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import plush from "../../assets/plushoutline.png";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={plush} style={styles.backgroundContainer} />
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  }
});

{
  /* <View style={styles.loginButton}>
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
        </View> */
}
