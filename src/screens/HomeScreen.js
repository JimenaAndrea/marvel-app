import React from 'react';
import { CharacterCard } from '../components';
import { FlatGrid } from 'react-native-super-grid';

function renderItem({ item }) {
  return(
    <CharacterCard image={item.image} name={item.name} id={item.id} />
  )
}

const HomeScreen = () => {
  return(
    <FlatGrid
      itemDimension={100}
      data={data}
      renderItem={renderItem}
      maxItemsPerRow={3}
      spacing={10}
    />
  )
}

const data = [
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 1,
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 2,
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 3,
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 4,
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 5,
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 6,
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 7,
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 8,
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 9,
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg'),
    id: 10,
  },


]

export default HomeScreen;