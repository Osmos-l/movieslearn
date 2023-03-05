import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { IMAGE_URI } from '../../services/TMDBService';
import Icon from "react-native-vector-icons/FontAwesome";

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
    fontStyle: 'italic',
    fontSize: 12,
    marginRight: 5
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
          {movie.vote_average} <Icon name="star" size={12} color="black" />
        </Text>
        <Text
          numberOfLines={5}
          style={styles.desc}>
          {movie.overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularMovieListItem;
