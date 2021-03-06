import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Monday from '../components/Schedule/Monday';
import Tuesday from '../components/Schedule/Tuesday';
import Wednesday from '../components/Schedule/Wednesday';
import Thursday from '../components/Schedule/Thursday';
import Friday from '../components/Schedule/Friday';
import Saturday from '../components/Schedule/Saturday';
import Sunday from '../components/Schedule/Sunday';
import { Headline, Divider } from 'react-native-paper';
import RoomRates from '../components/Schedule/RoomRates';
import Plans from '../components/Schedule/Plans';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Headline style={{ left: 20 }}>Get to know Plush Karaoke 😉</Headline>
          <Divider style={{ backgroundColor: 'black', marginHorizontal: 20 }} />
          <RoomRates />
          <Divider style={{ backgroundColor: 'black' }} />
          <Plans />
          <View>
            <ScrollView horizontal={true}>
              <Monday />
              <Tuesday />
              <Wednesday />
              <Thursday />
              <Friday />
              <Saturday />
              <Sunday />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  monday: {
    top: 20,
    marginHorizontal: 10
  },
  days: {
    justifyContent: 'center',
    flex: 1
  }
});
