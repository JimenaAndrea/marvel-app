import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CharacterCard, Header } from '../components';
import { FlatGrid } from 'react-native-super-grid';
import { requestCharacters } from '../marvelAPI';
import { useQuery } from 'react-query';

function renderItem({ item }) {
  const image = {uri: item.thumbnail.path + '/standard_xlarge.' + item.thumbnail.extension};
  
  return(
    <CharacterCard id={item.id} image={image} fav={true} fontSize={17} name={item.name} />
  )
}

const FavouritesScreen = () => {
  const { data, status } = useQuery('requestCharacters', requestCharacters);
  const favState = useSelector(state => state.favourites);
  const favourites = data.filter(element => favState[element.id]);

  return(
    status==='loading' ?
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        <Text style={{color: 'white'}}>Loading</Text>
      </View>
       
      :
      <View style={{flex: 1}}>
        <Header />
        <FlatGrid
          itemDimension={100}
          data={favourites}
          renderItem={renderItem}
          maxItemsPerRow={2}
          spacing={16}
          style={{backgroundColor: '#000000'}}
        />
      </View>
  )
}    

export default FavouritesScreen;