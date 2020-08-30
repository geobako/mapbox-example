import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button title="Map" onPress={() => navigation.navigate('Map')} />
      </View>
      <View style={styles.button}>
        <Button title="Graphs" onPress={() => navigation.navigate('Graphs')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    marginVertical: 10,
  },
});

export default Home;
