import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import * as Contacts from "expo-contacts";

export default class MenuScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      contacts: []
    };
  }

  loadContacts = async () => {
    const permission = await Expo.Permissions.askAsync(
      Expo.Permissions.CONTACTS
    );

    if (permission.status !== "granted") {
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails]
    });

    console.log(data);
    this.setState({ contacts: data, inMemoryContacts: data, isLoading: false });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadContacts();
  }

  static navigationOptions = {
    tabBarLabel: "Menu",
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons name={focused ? "ios-book" : "ios-journal"} size={25} />
    )
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Searchbar
          placeholder="Search something delicious!"
          placeholderTextColor="#dddddd"
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: "black"
          }}
        />
        <View style={{ flex: 1 }}>
          {this.state.isLoading ? (
            <View
              style={{
                ...StyleSheet.absoluteFill,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ActivityIndicator size="large" color="black" />
            </View>
          ) : null}
          <FlatList
            data={this.state.contacts}
            renderItem={this.renderItem}
            ListEmptyComponent={() => (
              <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
                <Image
                  style={{ height: 100, width: 100 }}
                  source={require("../../assets/SadPanda.png")}
                />
                <Text> Sorry, this is not on the menu...</Text>
              </View>
            )}
          />
        </View>
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
