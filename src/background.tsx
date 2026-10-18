import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

const COLORS = {
  base: '#08151C',
  teal: '#0F6A63',
  blue: '#183C86',
  amber: '#40301A',
};

export default function Background() {
  const { width: w, height: h } = useWindowDimensions();

  return (
    <Svg width={w} height={h} style={StyleSheet.absoluteFill}>
      <Defs>
        <RadialGradient id="teal" cx={w * 0.17} cy={h * 0.115} r={h * 0.3} gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={COLORS.teal} stopOpacity="1" />
          <Stop offset="0.45" stopColor={COLORS.teal} stopOpacity="0.6" />
          <Stop offset="0.75" stopColor={COLORS.teal} stopOpacity="0.2" />
          <Stop offset="1" stopColor={COLORS.teal} stopOpacity="0" />
        </RadialGradient>

        <RadialGradient id="blue" cx={w * 0.885} cy={h * 0.552} r={h * 0.27} gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={COLORS.blue} stopOpacity="1" />
          <Stop offset="0.45" stopColor={COLORS.blue} stopOpacity="0.6" />
          <Stop offset="0.75" stopColor={COLORS.blue} stopOpacity="0.2" />
          <Stop offset="1" stopColor={COLORS.blue} stopOpacity="0" />
        </RadialGradient>

        <RadialGradient id="amber" cx={w * 0.38} cy={h * 0.975} r={h * 0.18} gradientUnits="userSpaceOnUse">
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
}