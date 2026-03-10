import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    primaryLight: '#cfe9dc',
    appBarBackground: '#b4d3c0',
    background: '#f4fbf7',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({ ios: "Arial", android: "Roboto", default: "System" }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;