import { Pressable, StyleSheet, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 8,
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <Pressable style={styles.tab}>
      <Text
        style={styles.text}>{children}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;