import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CharacterScreen, FavouritesScreen, HomeScreen  } from './src/screens';
import { Provider as ReduxProvider} from 'react-redux';
import { store } from './src/redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Inter_400Regular, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';

const Stack = createNativeStackNavigator();
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Character' component={CharacterScreen} />
  </Stack.Navigator>
)
const FavouritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Favourites' component={FavouritesScreen} />
    <Stack.Screen name='Character' component={CharacterScreen} />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

const persistor = persistStore(store);

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen name="HomeStack" component={HomeStack} options={{ tabBarLabel: 'Home' }} />
              <Tab.Screen name="FavouritesStack" component={FavouritesStack} options={{ tabBarLabel: 'Favs' }} />
            </Tab.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
    
    
  );
}