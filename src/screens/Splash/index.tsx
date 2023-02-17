import React, { useEffect } from 'react';
import { Container } from './styles';
import LogoNameSvg from '../../assets/logo_name.svg';
import LogoSvg from '../../assets/logo_icon.svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
  Extrapolate,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useWindowDimensions } from 'react-native';

export function Splash() {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);
  const brandAnimation = useSharedValue(0);
  const brandRising = useSharedValue(0);
  const { height: HEIGHT } = useWindowDimensions();

  const brandStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            brandAnimation.value,
            [0, HEIGHT],
            [0, -HEIGHT],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const brandRisingStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        brandRising.value,
        [0, 25, 50, 75, 100],
        [0, 0.25, 0.5, 0.75, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50],
        [0, 0.3, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [80, 30],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  function startApp() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 });
    setTimeout(() => {
      brandAnimation.value = withTiming(HEIGHT, {
        duration: 1000,
        easing: Easing.ease,
      });
    }, 1000);

    setTimeout(() => {
      brandRising.value = withTiming(
        HEIGHT,
        {
          duration: 1000,
        },
        () => {
          'worklet';
          runOnJS(startApp)();
        }
      );
    }, 2000);
  });

  return (
    <Container>
      <Animated.View style={[logoStyle, { flexDirection: 'row' }]}>
        <Animated.View
          style={[brandStyle, { position: 'absolute', left: -55 }]}
        >
          <LogoSvg width={RFValue(50)} height={RFValue(70)} />
        </Animated.View>

        <Animated.View
          style={[brandRisingStyle, { position: 'absolute', left: -55 }]}
        >
          <LogoSvg width={RFValue(50)} height={RFValue(70)} />
        </Animated.View>
        <LogoNameSvg width={RFValue(120)} height={RFValue(70)} />
      </Animated.View>
    </Container>
  );
}
