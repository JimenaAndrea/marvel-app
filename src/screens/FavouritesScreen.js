import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { CharacterCard } from '../components';
import { FlatGrid } from 'react-native-super-grid';
import { requestCharacters } from '../marvelAPI';
import { useQuery } from 'react-query';

function renderItem({ item }) {
  const image = {uri: item.thumbnail.path + '/standard_xlarge.' + item.thumbnail.extension};
  
  return(
    <CharacterCard image={image} name={item.name} id={item.id} />
  )
}

const FavouritesScreen = () => {
  const { data, status } = useQuery('requestCharacters', requestCharacters);
  const favState = useSelector(state => state.favourites);
  const favourites = data.filter(element => favState[element.id]);

  return(
    status==='loading' ?
      <Text>Loading</Text> 
      :
      <FlatGrid
        itemDimension={100}
        data={favourites}
        renderItem={renderItem}
        maxItemsPerRow={2}
        spacing={16}
      />
  )
}    

export default FavouritesScreen;