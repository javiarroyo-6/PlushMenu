import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

class Plans extends Component {
  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title> AYCS </DataTable.Title>
          <DataTable.Title> Cost </DataTable.Title>
          <DataTable.Title> Perks</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell> Plan A </DataTable.Cell>
          <DataTable.Cell numeric> $25/Person </DataTable.Cell>
          <DataTable.Cell> AYCS </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell> Plan B </DataTable.Cell>
          <DataTable.Cell numeric> $30/Person </DataTable.Cell>
          <DataTable.Cell> +Drink tea/soda</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell> Plan C </DataTable.Cell>
          <DataTable.Cell numeric> $40/Person </DataTable.Cell>
          <DataTable.Cell>+Drink Draft</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    );
  }
}
export default Plans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
