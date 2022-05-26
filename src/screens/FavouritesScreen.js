import React from 'react';
import { Button, Text, View } from 'react-native';

const FavouritesScreen = ({ navigation }) => (
    <View>
        <Text>Hello World!</Text>
        <Button title='Press me' onPress={() => navigation.navigate('Character')} />
    </View>
)

export default FavouritesScreen;