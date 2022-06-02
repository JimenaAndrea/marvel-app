import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { requestCharacterById } from '../marvelAPI';
import { useQuery } from 'react-query';
import { CharacterCard } from '../components';
import SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavState, toggleFavourite } from '../redux';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import { LinearGradient } from 'expo-linear-gradient';


const CharacterScreen = ({ route }) => {
  const id = route.params.id;

  const { data, status } = useQuery(['requestCharacterById', id], () => requestCharacterById(id), {staleTime: 1000 * 60 *5});
 
  const image = {uri: data?.thumbnail?.path + '/standard_amazing.' + data?.thumbnail?.extension};

  const favState = useSelector(state => selectFavState(id, state));
  const dispatch = useDispatch();
  const color = favState ? '#C72828' : '#FFFFFF';
  const shadowColor = favState ? '#FF0000' :'transparent';

  const navigation = useNavigation();

  return(
    status==='loading' ?
      <View style={{flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color='#DADADA' />
      </View> 
      :
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        <ScrollView>
          <CharacterCard image={image} name={data?.name} id={id} fav={false} fontSize={32} />
          {/* Extra top gradient*/}
          <LinearGradient 
            colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
            style={{position: 'absolute', left: 0, right: 0, top: 0, height: '15%'}} />
          {/* Back button*/}
          <Ripple style={styles.backButton} onPress={() => navigation.goBack()} rippleColor='#FFFFFF' rippleSize={50} hitSlop={20} >
            <SimpleLineIcons color={'white'} name={'arrow-left'} size={20} />
            <Text style={{color: 'white', fontSize: 20, paddingLeft: '2%', fontFamily: 'Inter_600SemiBold'}}>Back</Text>
          </Ripple>
          <Text style={styles.description}>
            {data?.description == '' ? 'No description' : data?.description}
          </Text>
        </ScrollView>
        {/* Floating Action Button */}
        <Ripple style={styles.fab} rippleColor='#FFFFFF' rippleSize={50} onPress={() => dispatch(toggleFavourite(id))}>
            <SimpleLineIcons color={color} name={'heart'} size={20} 
            style={{ width: 25, alignSelf: 'baseline', textShadowOffset:{width: 1, height: 1}, textShadowColor: shadowColor, textShadowRadius: 5  }}/>
  
 
        </Ripple>
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
    bottom: '7%',
    right: '10%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 60,
    height: 60,
    padding: 20
    
  },
  backButton: {
    position: 'absolute',
    left: '5%',
    top: '5%',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default CharacterScreen;