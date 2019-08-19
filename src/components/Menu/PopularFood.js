import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import PopcornModal from "../Modals/PopcornModal";

export default class MenuList extends Component {
  state = {
    visibleModalId: null
  };

  renderModalContent = () => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}> Popcorn Chicken </Text>
      <Button
        title="Close"
        onPress={() => this.setState({ visibleModalId: null })}
      />
    </View>
  );

  render() {
    return (
      <View>
        <List.Item
          title="Popcorn Chicken"
          description="Price: $8.45"
          right={() => (
            <Button
              style={{ backgroundColor: "blue", height: 25, width: 25 }}
              title="View"
              onPress={() => alert("Hi")}
            />
          )}
          onPress={() => <PopcornModal />}
        />
        <List.Item
          title="Chicken Nuggets"
          description="Price: $7.45"
          right={() => <Ionicons name="ios-trophy" size={25} />}
        />
        <List.Item
          title="Seasoned Fries"
          description="$7.45"
          right={() => <Ionicons name="ios-trophy" size={25} />}
        />
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   modalContainer: {
//     justifyContent: "center",
//     backgroundColor: "white",
//     alignItems: "center",
//     flex: 1
//   },
//   content: {
//     backgroundColor: "white",
//     padding: 22,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 4,
//     borderColor: "rgba(0, 0, 0, 0.1)"
//   },
//   contentTitle: {
//     fontSize: 20,
//     marginBottom: 12
//   }
// });
