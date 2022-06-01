import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { requestCharacterById } from '../marvelAPI';
import { useQuery } from 'react-query';
import { CharacterCard } from '../components';
import SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavState, toggleFavourite } from '../redux';


const CharacterScreen = ({ route }) => {
  const id = route.params.id;

  const { data, status } = useQuery(['requestCharacterById', id], () => requestCharacterById(id));
 
  const image = {uri: data?.thumbnail?.path + '/standard_amazing.' + data?.thumbnail?.extension};

  const favState = useSelector(state => selectFavState(id, state));
  const dispatch = useDispatch();
  const color = favState ? '#C72828' : '#FFFFFF';

  return(
    status==='loading' ?
      <Text>Loading</Text> 
      :
      <View style={{flex: 1}}>
        <ScrollView>
          <CharacterCard image={image} name={data?.name} id={id} fav={false} fontSize={32} />
          <Text style={styles.description}>
            {data?.description == '' ? 'No description' : data?.description}
          </Text>
        </ScrollView>
        <Pressable style={styles.fab} onPress={() => dispatch(toggleFavourite(id))} >
          <SimpleLineIcons color={color} name={'heart'} size={20} />
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  description: {
    fontSize: 15, 
    fontFamily: 'Inter_400Regular', 
    lineHeight: 22, 
    textAlign: 'left', 
    marginLeft: 18, 
    marginTop: 27, 
    marginRight: 62
  },
  fab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 40,
    right: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 60,
    height: 60
  },
})

export default CharacterScreen;