import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CharacterCard } from '../components';
import { FlatGrid } from 'react-native-super-grid';
import { requestCharacters } from '../marvelAPI';
import { useQuery } from 'react-query';

function renderItem({ item }) {
  const image = {uri: item.thumbnail.path + '/standard_xlarge.' + item.thumbnail.extension};
  
  return(
    <CharacterCard id={item.id} image={image} fav={true} favSize={23} fontSize={17} name={item.name} />
  )
}

const FavouritesScreen = () => {
  const { data, status } = useQuery('requestCharacters', requestCharacters, {staleTime: 1000 * 60 *5});
  const favState = useSelector(state => state.favourites);
  const favourites = data.filter(element => favState[element.id]);

  return(
    status==='loading' ?
      <View style={{flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color='#DADADA' />
      </View>
      :
      <FlatGrid
        itemDimension={100}
        data={favourites}
        renderItem={renderItem}
        maxItemsPerRow={2}
        spacing={16}
        style={{backgroundColor: '#000000'}}
      />
  )
}    

export default FavouritesScreen;