import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

class RoomRates extends Component {
  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Room Rates</DataTable.Title>
          <DataTable.Title numeric>Regular</DataTable.Title>
          <DataTable.Title numeric>Happy Hour</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Small</DataTable.Cell>
          <DataTable.Cell numeric> $38/Hr</DataTable.Cell>
          <DataTable.Cell numeric> $19/Hr</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Medium</DataTable.Cell>
          <DataTable.Cell numeric>$48/Hr</DataTable.Cell>
          <DataTable.Cell numeric>$24/Hr</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Large</DataTable.Cell>
          <DataTable.Cell numeric>$60/Hr</DataTable.Cell>
          <DataTable.Cell numeric>$30/Hr</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>VIP</DataTable.Cell>
          <DataTable.Cell numeric>$85/Hr</DataTable.Cell>
          <DataTable.Cell numeric>$43/Hr</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Title>
          {' '}
          You are responsible for keeping track of your own time !{' '}
        </DataTable.Title>
      </DataTable>
    );
  }
}
export default RoomRates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
