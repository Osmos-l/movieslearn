import React from 'react';
import type {Node} from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MoviesScreen from './pages/Movies';
import ProfileScreen from './pages/Profile';

const Tab = createBottomTabNavigator();
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={MoviesScreen}
          options={{title: 'Movies'}}
        />
        <Tab.Screen name="Favorites" component={MoviesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
