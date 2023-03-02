import React, { useEffect, useState } from "react";
import { FlatList, Text, View, SafeAreaView, StyleSheet, StatusBar, TextInput } from "react-native";
import { getMoviesByPage, searchMoviesByName } from "../../services/TMDBService";
import PopularMovieListItem from '../../components/PopularMovieListItem';
import SearchBar from '../../components/SearchBar';

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

    if (page === 1) {
      setMovies(fetchedMovies);
    } else {
      setMovies([...movies, ...fetchedMovies]);
    }

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

  const onSearchPhraseUpdate = async (value) => {
    if (value && value.length > 0) {
      setMovies(await searchMoviesByName(value));
    } else {
      setPage(1);
      await fetchMoviesByPage(1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        onSearchPhraseUpdate={onSearchPhraseUpdate}
      />
      <View>
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
