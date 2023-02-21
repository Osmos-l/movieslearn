import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {getMoviesByPage} from '../../services/TMDBService';
import MovieComponent from '../../components/Movie';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5
  }
});


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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Popular Movies</Text>
      <View style={styles.container}>
        <FlatList data={movies}
                  renderItem={renderItem}
                  onEndReachedThreshold={0.5}
                  onEndReached={fetchMoreMovies}
        />
      </View>
    </SafeAreaView>
  );
};

export default MoviesScreen;
