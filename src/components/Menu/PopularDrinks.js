import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default class PopularDrinks extends Component {
  render() {
    return (
      <View>
        <List.Item
          title="Milk Tea"
          description="Price: $5.00"
          right={() => <Ionicons name="ios-flame" size={25} />}
        />
        <List.Item
          title="Green Milk Tea"
          description="Price: $5.00"
          right={() => <Ionicons name="ios-pint" size={25} />}
        />
        <List.Item
          title="Herbal Tea"
          description="$5.00"
          right={() => <Ionicons name="ios-cafe" size={25} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
