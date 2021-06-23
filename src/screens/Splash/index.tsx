import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import { Container } from "./styles";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("window").width;

export function Splash() {
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(animation.value, {
          duration: 1000,
          easing: Easing.bounce,
        }),
      },
    ],
  }));

  function handleAnimationPosition() {
    animation.value = Math.random() * (WIDTH - 100);
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyles]} />
      <TouchableOpacity style={styles.button} onPress={handleAnimationPosition}>
        <Text style={{ fontWeight: "bold", color: "#FFF" }}>Mover</Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
