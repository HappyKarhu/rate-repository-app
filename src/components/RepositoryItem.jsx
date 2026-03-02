import React from 'react';
import {View, FlatList, StyleSheet, Text } from 'react-native';


const RepositoryItem = ({repository}) => (
  <View style={styles.item}>
    <Text>Full name: {repository.fullName}</Text>
    <Text>Description: {repository.description}</Text>
    <Text>Language: {repository.language}</Text>
    <Text>Stars: {repository.stargazersCount}</Text>
    <Text>Forks: {repository.forksCount}</Text>
    <Text>Reviews: {repository.reviewCount}</Text>
    <Text>Rating: {repository.ratingAverage}</Text>
  </View>
);



const styles = StyleSheet.create({
  item: {
    backgroundColor: '#dbf2c2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default RepositoryItem;