import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {NeuView} from 'react-native-neu-element';
import Circle from './components/Circle';
import Animated, {useValue, Easing} from 'react-native-reanimated';
// import {AnimatedCircularProgress} from 'react-native-circular-progress';
// import AnimatedCircularProgress from 'react-native-animated-circular-progress';
import AnimatedProgressWheel from 'react-native-progress-wheel';

import {timing} from 'react-native-redash';
const {Clock} = Animated;

const Graphs = ({navigation}) => {
  const clock = new Clock();

  const config = {
    clock,
    duration: 10 * 1000,
    from: 0,
    to: 1,
    easing: Easing.linear,
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(70);
  }, []);

  return (
    <View style={styles.screen}>
      <NeuView
        color={'#f5f5f5'}
        height={136}
        containerStyle={{}}
        width={136}
        concave
        borderRadius={16}>
        {/* <AnimatedProgressWheel
          size={120}
          width={20}
          animateFromValue={0}
          color={'green'}
          duration={2000}
          progress={70}
          backgroundColor={'red'}
        /> */}
        {/* <Circle progress={timing(config)} /> */}
      </NeuView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    height: 300,
  },
});

export default Graphs;
