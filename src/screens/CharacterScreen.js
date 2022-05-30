import React from 'react';
import { Text, View } from 'react-native'

const CharacterScreen = ({ route }) => {
  const id = route.params.id
  return(
    <View>
      <Text>Character ID: {id}</Text>
    </View>
  )
}

export default CharacterScreen;