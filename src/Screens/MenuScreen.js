import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Headline } from "react-native-paper";
import PopularFood from "../components/Menu/PopularFood";
import PopularDrinks from "../components/Menu/PopularDrinks";
import PopularBar from "../components/Menu/PopularBar";
import { Ionicons } from "@expo/vector-icons";

export default class MenuScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Menu",
    tabBarIcon: ({ focused }) => (
      <Ionicons name={focused ? "ios-book" : "ios-journal"} size={20} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            height: 36,
            justifyContent: "space-evenly",
            top: 10
          }}
        >
          <Button
            icon="local-dining"
            mode="contained"
            onPress={() => this.props.navigation.navigate("Food")}
            style={{ backgroundColor: "blue" }}
          >
            Food
          </Button>
          <Button
            icon="local-cafe"
            mode="contained"
            onPress={() => this.props.navigation.navigate("Drinks")}
            style={{ backgroundColor: "blue" }}
          >
            Drinks
          </Button>

          <Button
            icon="local-bar"
            mode="contained"
            onPress={() => this.props.navigation.navigate("Bar")}
            style={{ backgroundColor: "blue" }}
          >
            Bar
          </Button>
        </View>
        <ScrollView>
          <Headline style={{ paddingTop: 30, textAlign: "center" }}>
            Most Popular Food
          </Headline>
          <View />
          <View style={{ top: 5 }}>
            <PopularFood />
          </View>
          <Headline style={{ paddingTop: 10, textAlign: "center" }}>
            Most Popular Drinks
          </Headline>
          <View>
            <PopularDrinks />
          </View>
          <Headline style={{ paddingTop: 10, textAlign: "center" }}>
            Most Popular Alcohol
          </Headline>
          <View>
            <PopularBar />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

// export default class MenuScreen extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false,
//       contacts: []
//     };
//   }

//   loadContacts = async () => {
//     const permission = await Expo.Permissions.askAsync(
//       Expo.Permissions.CONTACTS
//     );

//     if (permission.status !== 'granted') {
//       return;
//     }

//     const { data } = await Contacts.getContactsAsync({
//       fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails]
//     });

//     console.log(data);
//     this.setState({ contacts: data, inMemoryContacts: data, isLoading: false });
//   };

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     this.loadContacts();
//   }

//   static navigationOptions = {
//     tabBarLabel: 'Menu',
//     tabBarIcon: ({ tintColor, focused }) => (
//       <Ionicons name={focused ? 'ios-book' : 'ios-journal'} size={25} />
//     )
//   };

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Searchbar
//           placeholder='Search something delicious!'
//           placeholderTextColor='#dddddd'
//           style={{
//             marginHorizontal: 20,
//             marginTop: 20,
//             borderBottomWidth: 0.5,
//             borderBottomColor: 'black'
//           }}
//         />
//         <View style={{ flex: 1 }}>
//           {this.state.isLoading ? (
//             <View
//               style={{
//                 ...StyleSheet.absoluteFill,
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               <ActivityIndicator size='large' color='black' />
//             </View>
//           ) : null}
//           <FlatList
//             data={this.state.contacts}
//             renderItem={this.renderItem}
//             ListEmptyComponent={() => (
//               <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
//                 <Image
//                   style={{ height: 100, width: 100 }}
//                   source={require('../../assets/SadPanda.png')}
//                 />
//                 <Text> Sorry, this is not on the menu...</Text>
//               </View>
//             )}
//           />
//         </View>
//       </View>
//     );
//   }
// }
