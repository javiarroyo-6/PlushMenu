import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

class Monday extends Component {
  render() {
    return (
      <Card>
        <Card.Cover
          source={{ uri: 'https://picsum.photos/700' }}
          style={{ size: 0.1 }}
        />
        <Card.Content>
          <Title>Monday</Title>
          <Paragraph>-AYCS : 😁</Paragraph>
        </Card.Content>
      </Card>
    );
  }
}
export default Monday;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
