import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { CharacterCard } from '../components';
import { FlatGrid } from 'react-native-super-grid';
import { requestCharacters } from '../marvelAPI';
import { useQuery } from 'react-query';

function renderItem({ item }) {
  const image = {uri: item.thumbnail.path + '/standard_large.' + item.thumbnail.extension};
  return(
    <CharacterCard id={item.id} image={image} fav={true} fontSize={12} name={item.name} />
  )
}

const HomeScreen = () => {
  const { data, status } = useQuery('requestCharacters', requestCharacters);

  return(
    status==='loading' ?
    
      <View style={{flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color='#DADADA' />
      </View> 
      :
      <FlatGrid
        itemDimension={100}
        data={data}
        renderItem={renderItem}
        maxItemsPerRow={3}
        spacing={10}
        style={{backgroundColor: '#000000', paddingTop: 80}}
      />
  )
}

export default HomeScreen;