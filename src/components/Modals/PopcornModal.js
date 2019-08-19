import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Modal from "react-native-modal";

export default class PopcornModal extends Component {
  state = {
    visibleModalId: null
  };

  renderModalContent = () => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Hi this is a modal </Text>
      <Button
        title="Close"
        onPress={() => this.setState({ visibleModalId: null })}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.content}>
        <Button
          onPress={() => this.setState({ visibleModalId: "sliding" })}
          title="Default"
        />
        <Modal
          isVisible={this.state.visibleModalId === "sliding"}
          animationIn="slideInRight"
          animationOut="slideOutLeft"
        >
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    flex: 1
  },
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12
  }
});
