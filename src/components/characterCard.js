import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';

const CharacterCard = ({ image, name }) => {
  let [fontsLoaded] = useFonts({
      Inter_600SemiBold,
  });
  const [ color, setColor ] = React.useState('white')

  return(
    <View style={{width: 115, height: 115}}>
      <ImageBackground source={image} style={{flex: 1}}>
        <LinearGradient 
          colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)']}
          style={{position: 'absolute', left: 0, right: 0, top: 0, height: '36.5%'}} />
        <Pressable 
          style={{position: 'absolute', top: 7, left: 0, right: 7, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-end'}}
          onPress = {() => setColor(color=='#FFFFFF'? '#C72828' : '#FFFFFF')}>
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
    </View>
  )
}

export default CharacterCard;