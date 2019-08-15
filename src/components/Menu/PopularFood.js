import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default class MenuList extends Component {
  render() {
    return (
      <View>
        <List.Item
          title='Popcorn Chicken'
          description='Price: $8.45'
          right={() => <Ionicons name='ios-flame' size={25} />}
        />
        <List.Item
          title='Chicken Nuggets'
          description='Price: $7.45'
          right={() => <Ionicons name='ios-trophy' size={25} />}
        />
        <List.Item
          title='Seasoned Fries'
          description='$7.45'
          right={() => <Ionicons name='ios-trophy' size={25} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
