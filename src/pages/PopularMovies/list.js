import React, { useEffect, useState } from "react";
import {FlatList, Text, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {getMoviesByPage} from '../../services/TMDBService';
import PopularMovieListItem from '../../components/PopularMovieListItem';

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

const PopularMoviesListScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [moviePaginnation, setPage] = useState(1);

  const fetchMoviesByPage = async page => {
    const fetchedMovies = await getMoviesByPage(page);
    setMovies([...movies, ...fetchedMovies]);
  }

  const fetchMoreMovies = () => {
    setPage(moviePaginnation + 1);
  }

  useEffect(() => {
    fetchMoviesByPage(moviePaginnation);
  }, [moviePaginnation]);

  const renderItem = ({item, index, sep}) => (
    <PopularMovieListItem movie={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Popular Movies</Text>
      <View style={styles.container}>
        <FlatList data={movies}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  onEndReachedThreshold={0.5}
                  onEndReached={fetchMoreMovies}
        />
      </View>
    </SafeAreaView>
  );
};

export default PopularMoviesListScreen;
