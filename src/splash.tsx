import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Svg, {
  Defs,
  RadialGradient,
  Rect,
  Stop,
  Line,
} from 'react-native-svg';

/**
 * Design reference: 390 x 844 pt (780 x 1688 px @2x)
 * Requires: react-native-svg
 * Font: Sora (Bold + Regular). Falls back to system font if not linked.
 */

const COLORS = {
  base: '#08151C',
  teal: '#0F6A63',
  blue: '#183C86',
  amber: '#40301A',
  accent: '#2DD4BF',
  title: '#EAF6F3',
  tagline: '#9DB2B8',
};

const Background = () => {
  const { width: w, height: h } = useWindowDimensions();

  return (
    <Svg width={w} height={h} style={StyleSheet.absoluteFill}>
      <Defs>
        {/* Top-left teal glow */}
        <RadialGradient
          id="teal"
          cx={w * 0.17}
          cy={h * 0.115}
          r={h * 0.3}
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={COLORS.teal} stopOpacity="1" />
          <Stop offset="0.45" stopColor={COLORS.teal} stopOpacity="0.6" />
          <Stop offset="0.75" stopColor={COLORS.teal} stopOpacity="0.2" />
          <Stop offset="1" stopColor={COLORS.teal} stopOpacity="0" />
        </RadialGradient>

        {/* Right-side blue glow */}
        <RadialGradient
          id="blue"
          cx={w * 0.885}
          cy={h * 0.552}
          r={h * 0.27}
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={COLORS.blue} stopOpacity="1" />
          <Stop offset="0.45" stopColor={COLORS.blue} stopOpacity="0.6" />
          <Stop offset="0.75" stopColor={COLORS.blue} stopOpacity="0.2" />
          <Stop offset="1" stopColor={COLORS.blue} stopOpacity="0" />
        </RadialGradient>

        {/* Bottom amber glow */}
        <RadialGradient
          id="amber"
          cx={w * 0.38}
          cy={h * 0.975}
          r={h * 0.18}
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={COLORS.amber} stopOpacity="1" />
          <Stop offset="0.5" stopColor={COLORS.amber} stopOpacity="0.55" />
          <Stop offset="1" stopColor={COLORS.amber} stopOpacity="0" />
        </RadialGradient>
      </Defs>

      <Rect width={w} height={h} fill={COLORS.base} />
      <Rect width={w} height={h} fill="url(#teal)" />
      <Rect width={w} height={h} fill="url(#blue)" />
      <Rect width={w} height={h} fill="url(#amber)" />
    </Svg>
  );
};

const DumbbellIcon = () => (
  <Svg width={48} height={25} viewBox="0 0 96 50">
    <Line x1="4" y1="9" x2="4" y2="35" stroke={COLORS.accent} strokeWidth="8" strokeLinecap="round" />
    <Line x1="18" y1="4" x2="18" y2="41" stroke={COLORS.accent} strokeWidth="8" strokeLinecap="round" />
    <Line x1="18" y1="22" x2="74" y2="22" stroke={COLORS.accent} strokeWidth="8" strokeLinecap="round" />
    <Line x1="74" y1="4" x2="74" y2="41" stroke={COLORS.accent} strokeWidth="8" strokeLinecap="round" />
    <Line x1="88" y1="9" x2="88" y2="35" stroke={COLORS.accent} strokeWidth="8" strokeLinecap="round" />
  </Svg>
);

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Background />

      <View style={styles.content}>
        <View style={styles.card}>
          <DumbbellIcon />
        </View>

        <Text style={styles.title}>[FlexGo]</Text>
        <Text style={styles.tagline}>Train smart. Track everything.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base,
  },
  content: {
    position: 'absolute',
    top: '38.7%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  card: {
    width: 120,
    height: 120,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.09)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 20,
    fontFamily: 'Sora-Bold',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: -0.5,
    color: COLORS.title,
  },
  tagline: {
    marginTop: 19,
    fontFamily: 'Sora-Regular',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.tagline,
  },
});