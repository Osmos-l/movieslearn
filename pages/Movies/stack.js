import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MoviesScreen from './index';

const MovieStack = createNativeStackNavigator();

const MovieStackScreen = () => {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen name="Home" component={MoviesScreen} />
    </MovieStack.Navigator>
  );
};

export default MovieStackScreen;
