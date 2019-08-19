import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

class Monday extends Component {
  render() {
    let dimensions = Dimensions.get('window');
    let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth = dimensions.width;

    return (
      <View style={styles.container}>
        <Card style={{ height: 250, width: 250 }}>
          <Card.Cover
            source={{ uri: 'https://picsum.photos/700' }}
            style={{ size: 1 }}
          />
          <Card.Content>
            <Title>Monday</Title>
            <Paragraph>-AYCS : 😁</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
export default Monday;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
