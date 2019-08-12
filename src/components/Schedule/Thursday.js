import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

class Thursday extends Component {
  render() {
    return (
      <Card style={{ borderRadius: 20 }}>
        <Card.Cover
          source={{ uri: 'https://picsum.photos/700' }}
          style={{ size: 0.5 }}
        />
        <Card.Content>
          <Title>Thursday</Title>
          <Paragraph>-AYCS : 😁</Paragraph>
        </Card.Content>
      </Card>
    );
  }
}
export default Thursday;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
