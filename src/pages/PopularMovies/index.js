import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PopularMoviesListScreen from "./list";
import PopularMovieDetailScreen from "./detail";

const Stack = createNativeStackNavigator();

const PopularMoviesIndex = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={PopularMoviesListScreen} />
        <Stack.Screen name="Details" component={PopularMovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PopularMoviesIndex;
