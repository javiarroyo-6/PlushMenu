import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
export default class PopularBar extends Component {
  render() {
    return (
      <View>
        <List.Item
          title='Sapporo Premium'
          description='Price: 16oz $6 / 64oz $17'
          right={() => <Ionicons name='ios-beer' size={25} />}
        />
        <List.Item
          title='Chardonnay'
          description='Price: $6'
          right={() => <Ionicons name='ios-wine' size={25} />}
        />
        <List.Item
          title='Bourbon Coke'
          description='Price: $6'
          right={() => <Ionicons name='ios-wine' size={25} />}
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
