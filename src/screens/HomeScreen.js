import React from 'react';
import { Text } from 'react-native';
import { CharacterCard } from '../components';
import { FlatGrid } from 'react-native-super-grid';
import { requestCharacters } from '../marvelAPI';
import { useQuery } from 'react-query';

function renderItem({ item }) {
  const image = {uri: item.thumbnail.path + '/standard_large.' + item.thumbnail.extension};
  return(
    <CharacterCard image={image} name={item.name} id={item.id} />
  )
}

const HomeScreen = () => {
  const { data, status } = useQuery('requestCharacters', requestCharacters);

  return(
    status==='loading' ?
      <Text>Loading</Text> 
      :
      <FlatGrid
        itemDimension={100}
        data={data}
        renderItem={renderItem}
        maxItemsPerRow={3}
        spacing={10}
      />
  )
}

export default HomeScreen;