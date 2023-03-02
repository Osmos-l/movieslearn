import React from "react";
import { Button, Image, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { IMAGE_URI } from '../../services/TMDBService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  logo: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5
  },
  note: {
    textAlign: 'right',
    fontStyle: 'italic'
  },
  desc: {
    padding: 5
  }
});

const PopularMovieDetailScreen = ({ route, navigation }) => {
  const { movie } = route.params;

  if (!movie)
    return

  const background_uri = `${IMAGE_URI}${movie.backdrop_path}`

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Image
        style={styles.logo}
        source={{
          uri: background_uri,
        }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.note}>
        Note: {movie.vote_average} ({movie.vote_count} votes)
      </Text>
      <Text style={styles.desc}>
        {movie.overview}
      </Text>
    </SafeAreaView>
  );
};

export default PopularMovieDetailScreen;
