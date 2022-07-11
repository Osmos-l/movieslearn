import React from 'react';
import {Text, View} from 'react-native';

const MovieComponent = ({movie}) => {
  return (
    <View>
      <Text>{movie.title}</Text>
      <Text>
        {movie.vote_average} on {movie.vote_count} votes
      </Text>
    </View>
  );
};

export default MovieComponent;
