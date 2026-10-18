import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, View } from 'react-native'
import Svg, {
  Defs, LinearGradient, Stop, Rect, Line, Path, Ellipse,
} from 'react-native-svg'

const AnimatedPath = Animated.createAnimatedComponent(Path)

/* Gradient background shared by all three illustrations */
const Backdrop = ({ id, color }: { id: string; color: string }) => (
  <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
    <Defs>
      <LinearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0" stopColor={color} stopOpacity="0.5" />
        <Stop offset="1" stopColor="#08151C" stopOpacity="0.9" />
      </LinearGradient>
    </Defs>
    <Rect width="100%" height="100%" fill={`url(#${id})`} />
  </Svg>
)

/* ---------- STRENGTH: barbell lifting up and down ---------- */
export function StrengthArt() {
  const lift = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(lift, { toValue: 1, duration: 800, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        Animated.timing(lift, { toValue: 0, duration: 800, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
      ])
    )
    loop.start()
    return () => loop.stop()
  }, [lift])

  const translateY = lift.interpolate({ inputRange: [0, 1], outputRange: [18, -4] })

  return (
    <View style={StyleSheet.absoluteFill}>
      <Backdrop id="gStrength" color="#2EE6B8" />
      {/* floor + shadow */}
      <Svg style={StyleSheet.absoluteFill} viewBox="0 0 342 96" preserveAspectRatio="xMidYMax meet">
        <Ellipse cx="171" cy="84" rx="56" ry="5" fill="#000" opacity={0.35} />
        <Line x1="60" y1="86" x2="282" y2="86" stroke="#2EE6B8" strokeOpacity={0.35} strokeWidth={2} strokeLinecap="round" />
      </Svg>
      {/* barbell */}
      <Animated.View style={[StyleSheet.absoluteFill, { transform: [{ translateY }] }]}>
        <Svg style={StyleSheet.absoluteFill} viewBox="0 0 342 96" preserveAspectRatio="xMidYMax meet">
          <Line x1="92" y1="40" x2="250" y2="40" stroke="#D5F7EE" strokeWidth={5} strokeLinecap="round" />
          <Rect x="112" y="16" width="12" height="48" rx="4" fill="#2EE6B8" />
          <Rect x="126" y="24" width="9" height="32" rx="3" fill="#7DF0D3" />
          <Rect x="218" y="16" width="12" height="48" rx="4" fill="#2EE6B8" />
          <Rect x="207" y="24" width="9" height="32" rx="3" fill="#7DF0D3" />
          <Rect x="152" y="36" width="8" height="8" rx="2" fill="#0E3B33" />
          <Rect x="182" y="36" width="8" height="8" rx="2" fill="#0E3B33" />
        </Svg>
      </Animated.View>
    </View>
  )
}

/* ---------- CARDIO: heartbeat line that draws itself ---------- */
const ECG =
  'M10 56 H90 L104 56 L114 28 L126 82 L138 44 L146 56 H196 L210 56 L220 28 L232 82 L244 44 L252 56 H332'
const ECG_LENGTH = 520 // approx. total length of the path above

export function CardioArt() {
  const dash = useRef(new Animated.Value(ECG_LENGTH)).current

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(dash, { toValue: 0, duration: 1400, easing: Easing.linear, useNativeDriver: false }),
        Animated.delay(400),
        Animated.timing(dash, { toValue: -ECG_LENGTH, duration: 900, easing: Easing.linear, useNativeDriver: false }),
        Animated.timing(dash, { toValue: ECG_LENGTH, duration: 0, useNativeDriver: false }),
      ])
    )
    loop.start()
    return () => loop.stop()
  }, [dash])

  return (
    <View style={StyleSheet.absoluteFill}>
      <Backdrop id="gCardio" color="#5078F0" />
      <Svg style={StyleSheet.absoluteFill} viewBox="0 0 342 96" preserveAspectRatio="xMidYMid meet">
        {/* faint track */}
        <Path d={ECG} stroke="#6C9BFF" strokeOpacity={0.25} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* animated line */}
        <AnimatedPath
          d={ECG}
          stroke="#8FB4FF"
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray={[ECG_LENGTH, ECG_LENGTH]}
          strokeDashoffset={dash}
        />
      </Svg>
    </View>
  )
}

/* ---------- FLEXIBILITY: figure swaying side to side ---------- */
export function FlexibilityArt() {
  const sway = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(sway, { toValue: 1, duration: 1500, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(sway, { toValue: 0, duration: 1500, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ])
    )
    loop.start()
    return () => loop.stop()
  }, [sway])

  const rotate = sway.interpolate({ inputRange: [0, 1], outputRange: ['-14deg', '14deg'] })

  return (
    <View style={StyleSheet.absoluteFill}>
      <Backdrop id="gFlex" color="#A078F0" />

      {/* floor line */}
      <Svg style={[StyleSheet.absoluteFill]} viewBox="0 0 342 96" preserveAspectRatio="xMidYMax meet">
        <Line x1="60" y1="92" x2="282" y2="92" stroke="#C4A8FF" strokeOpacity={0.35} strokeWidth={2} strokeLinecap="round" />
      </Svg>

      {/* legs (static) */}
      <View style={styles.legs}>
        <Svg width={120} height={22} viewBox="0 0 120 22">
          <Path d="M60 0 L42 20 M60 0 L78 20" stroke="#E3D6FF" strokeWidth={5} strokeLinecap="round" />
        </Svg>
      </View>

      {/* upper body (rotates around the hips = centre of this 120x120 box) */}
      <Animated.View style={[styles.upper, { transform: [{ rotate }] }]}>
        <Svg width={120} height={120} viewBox="0 0 120 120">
          <Path
            d="M60 60 V32 M60 36 L47 8 M60 36 L73 8"
            stroke="#E3D6FF" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" fill="none"
          />
          <Path d="M53 22 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0" fill="#C4A8FF" />
        </Svg>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  legs: { position: 'absolute', bottom: 4, left: '50%', marginLeft: -60, width: 120, height: 22 },
  // hips sit 26px above the bottom: box centre = bottom + (-34) + 60
  upper: { position: 'absolute', bottom: -34, left: '50%', marginLeft: -60, width: 120, height: 120 },
})