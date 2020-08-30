import React, {useEffect} from 'react';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  interpolate,
  multiply,
  useValue,
} from 'react-native-reanimated';
const size = 100;
const strokeWidth = 5;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const MyCirle = ({progress}) => {
  const alpha = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, Math.PI * 2],
  });

  useEffect(() => {
    progress.setValue(60);
  }, []);

  const strokeDashoffset = multiply(alpha * radius);

  console.log(strokeDashoffset);
  console.log(progress);
  if (!progress) return null;
  return (
    <Svg width={size} height={size}>
      <Circle
        cx={size / 2}
        cy={size / 2}
        fill="none"
        stroke="red"
        r={radius}
        strokeWidth={strokeWidth}
      />
      <AnimatedCircle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDashoffset={strokeDashoffset}
        stroke="blue"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={`${circumference} ${circumference}`}
      />
    </Svg>
  );
};

export default MyCirle;
