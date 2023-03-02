import React from 'react';
import type {Node} from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from './src/pages/Profile';
import PopularMoviesIndex from "./src/pages/PopularMovies";

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
          component={PopularMoviesIndex}

          options={{
            tabBarIcon: ({ color, size }) => false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

export default App;
