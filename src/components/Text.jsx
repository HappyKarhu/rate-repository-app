import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ style, color, fontWeight, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.textSecondary,
    fontWeight === 'bold' && styles.bold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;