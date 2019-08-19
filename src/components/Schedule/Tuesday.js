import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

class Tuesday extends Component {
  render() {
    let dimensions = Dimensions.get('window');
    let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth = dimensions.width;

    return (
      <View style={{ height: imageHeight, width: imageWidth }}>
        <Card style={{ borderRadius: 20 }}>
          <Card.Cover
            source={{ uri: 'https://picsum.photos/700' }}
            style={{ size: 0.5 }}
          />
          <Card.Content>
            <Title>Tuesday</Title>
            <Paragraph>AYCS : 😁</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
export default Tuesday;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
