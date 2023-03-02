import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { IMAGE_URI } from '../../services/TMDBService';

const styles = StyleSheet.create({
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

const PopularMovieListItem = ({movie, navigation}) => {
  if (!movie)
      return

  const background_uri = `${IMAGE_URI}${movie.backdrop_path}`

  const openMovieDetail = () => {
    navigation.navigate("Details", {
      movie
    });
  }

  return (
    <TouchableOpacity onPress={openMovieDetail}>
      <View>
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
      </View>
    </TouchableOpacity>
  );
};

export default PopularMovieListItem;
