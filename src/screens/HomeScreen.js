import React from 'react';
import { CharacterCard } from '../components';
import { FlatGrid } from 'react-native-super-grid';

function renderItem({ item }) {
  return(
    <CharacterCard image={item.image} name={item.name} />
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
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },
  {
    name: 'Avengers',
    image: require('../../assets/3dman442.jpg')
  },

]

export default HomeScreen;