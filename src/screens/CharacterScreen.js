import React from 'react';
import { Text, View } from 'react-native';
import { requestCharacterById } from '../marvelAPI';
import { useQuery } from 'react-query';


const CharacterScreen = ({ route }) => {
  const id = route.params.id;

  const { data, status } = useQuery(['requestCharacterById', id], () => requestCharacterById(id));
 

  return(
    <View>
      <Text>Character ID: {id}</Text>
    </View>
  )
}

export default CharacterScreen;