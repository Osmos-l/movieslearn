import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { getImageByMovie, getMoviesByPage } from "../../services/TMDBService";


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

const MovieComponent = ({movie}) => {

  const background_uri = `https://image.tmdb.org/t/p/original//${movie.backdrop_path}`

  return (
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
  );
};

export default MovieComponent;
