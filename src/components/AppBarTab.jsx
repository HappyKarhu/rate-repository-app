import { Pressable, StyleSheet, Text } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';

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

const AppBarTab = ({ children, to }) => {
  return (
    <Link to={to} component={Pressable} style={styles.tab}>
      <Text style={styles.text}>{children}</Text>
    </Link>
  );
};

export default AppBarTab;