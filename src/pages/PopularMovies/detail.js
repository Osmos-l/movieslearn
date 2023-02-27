import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5
  },
});

const PopularMovieDetailScreen = ({ route, navigation }) => {
  const { movie } = route.params;

  if (!movie)
    return

  return (
    <SafeAreaView>
      <Text style={styles.title}>{movie.title}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default PopularMovieDetailScreen;
