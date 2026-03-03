import React from 'react';
import {View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';


const RepositoryItem = ({repository}) => {
  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    } 
    return count;
};

return (
  <View style={styles.item}>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
      <Image source={{ uri: repository.ownerAvatarUrl }} style={{ width: 50, height: 50, borderRadius: 5, marginRight: 10 }} />
      <View style={{ flex: 1 }}>
        <Text fontWeight="bold">{repository.fullName}</Text>
        <Text color="textSecondary">{repository.description}</Text>
         {/* Language tag */}
      <View style={styles.languageTag}>
        <Text style={styles.languageText}>
        {repository.language}
        </Text>
      </View>
      </View>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View style={{ alignItems: 'center' }}>
        <Text fontWeight="bold">{formatCount(repository.stargazersCount)}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text fontWeight="bold">{formatCount(repository.forksCount)}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text fontWeight="bold">{formatCount(repository.reviewCount)}</Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text fontWeight="bold">{repository.ratingAverage}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  languageTag: {
    alignSelf: 'flex-start',
    marginTop: 6,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },

  languageText: {
    color: '#ffffff',
  },
});

export default RepositoryItem;