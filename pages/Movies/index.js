import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View, SafeAreaView} from 'react-native';
import {getMoviesByPage} from '../../services/TMDBService';
import MovieComponent from '../../components/Movie';

const MoviesScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [moviePaginnation, setPage] = useState(1);

  const fetchMoviesByPage = async page => {
    const fetchedMovies = await getMoviesByPage(page);
    setMovies([...movies, ...fetchedMovies]);
  }

  useEffect(() => {
    fetchMoviesByPage(moviePaginnation);
  }, [moviePaginnation]);

  const renderItem = ({item, index, sep}) => (
    <MovieComponent movie={item} />
  );

  const fetchMoreMovies = () => {
    setPage(moviePaginnation + 1);
  }

  return (
    <SafeAreaView>
      <Text>What do we watch today ?</Text>
      <Text>Avaibles movies: {movies.length}</Text>
      <FlatList data={movies}
                renderItem={renderItem}
                onEndReachedThreshold={0.5}
                onEndReached={fetchMoreMovies}
                numColumns={2}
      />
    </SafeAreaView>
  );
};

export default MoviesScreen;
