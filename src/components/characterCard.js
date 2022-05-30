import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavState, toggleFavourite } from '../redux';
import { useNavigation } from '@react-navigation/native';

const CharacterCard = ({ id, image, name }) => {
  let [fontsLoaded] = useFonts({
      Inter_600SemiBold,
  });
  
  const favState = useSelector(state => selectFavState(id, state));
  const dispatch = useDispatch();
  const color = favState ? '#C72828' : '#FFFFFF';

  const navigation = useNavigation();
 
  return(
    <Pressable
      onPress = {() => navigation.navigate( 'Character', { id: id } )}>
      <ImageBackground source={image} style={{ aspectRatio: 1 }}>
        <LinearGradient 
          colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)']}
          style={{position: 'absolute', left: 0, right: 0, top: 0, height: '36.5%'}} />
        <Pressable 
          hitSlop={20}
          style={{position: 'absolute', top: '6%', right: '6%',  justifyContent: 'flex-start', alignItems: 'flex-end'}}
          onPress = {() => dispatch(toggleFavourite(id))}>
          <SimpleLineIcons color={color} name={"heart"} size={16} />
        </Pressable>
        <LinearGradient 
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
          locations={[0.20, 0.94]}
          style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: '36.5%'}} />
        <View style={{position: 'absolute', top: 0, left: 8, right: 0, bottom: 11, justifyContent: 'flex-end', alignItems: 'flex-start'}}>
          <Text style={{color: 'white', fontSize: 12, fontFamily: 'Inter_600SemiBold', fontWeight: '600', fontStyle: 'normal'}}>{name}</Text>
        </View>
      </ImageBackground>
    </Pressable>
    
    
  )
}

export default CharacterCard;