import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { requestCharacterById } from '../marvelAPI';
import { useQuery } from 'react-query';
import { CharacterCard } from '../components';
import SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavState, toggleFavourite } from '../redux';
import { useNavigation } from '@react-navigation/native';


const CharacterScreen = ({ route }) => {
  const id = route.params.id;

  const { data, status } = useQuery(['requestCharacterById', id], () => requestCharacterById(id));
 
  const image = {uri: data?.thumbnail?.path + '/standard_amazing.' + data?.thumbnail?.extension};

  const favState = useSelector(state => selectFavState(id, state));
  const dispatch = useDispatch();
  const color = favState ? '#C72828' : '#FFFFFF';

  const navigation = useNavigation();

  return(
    status==='loading' ?
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        <Text style={{color: 'white'}}>Loading</Text>
      </View> 
      :
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        <ScrollView>
          <CharacterCard image={image} name={data?.name} id={id} fav={false} fontSize={32} />
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()} hitSlop={20} >
            <SimpleLineIcons color={'white'} name={'arrow-left'} size={20} />
            <Text style={{color: 'white', fontSize: 24, paddingLeft: 10, fontFamily: 'Inter_600SemiBold'}}>Back</Text>
          </Pressable>
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
    marginLeft: '4%', 
    marginTop: '3%', 
    marginRight: '15%',
    marginBottom: '15%',
    color: 'rgba(188, 188, 188, 1)'
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
  backButton: {
    position: 'absolute',
    left: 23,
    top: 30,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default CharacterScreen;