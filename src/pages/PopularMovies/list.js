import React, { useEffect, useState } from "react";
import { FlatList, Text, View, SafeAreaView, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { getPopularMoviesByPage, searchMoviesByNameAndPage } from "../../services/TMDBService";
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
  },
  noFound: {
    textAlign: 'center',
    verticalAlign: 'center'
  }
});

const PopularMoviesListScreen = ({ navigation }) => {
  // PopularMovies
  const [movies, setMovies] = useState([]);

  // SearchBar
  const [searchPhrase, setSearchPhrase] = useState([]);

  // Other
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchMoviesByPage = async () => {
    const fetchedMovies = await (searchPhrase && searchPhrase.length > 0 ?
      searchMoviesByNameAndPage(searchPhrase, page) : getPopularMoviesByPage(page))

    const movies = page === 1 ? fetchedMovies : [...movies, ...fetchedMovies]
    setMovies(movies);

    if (loading) {
      setLoading(false);
    }
  }

  const fetchMoreMovies = () => {
    setPage(page + 1);
  }

  useEffect(() => {
      fetchMoviesByPage();
  }, [page, searchPhrase]);

  const renderItem = ({item, index, sep}) => (
    <PopularMovieListItem movie={item} navigation={navigation} />
  );

  const onSearchPhraseUpdate = (value) => {
    setLoading(true);

    setSearchPhrase(value);

    if (page != 1) {
      setPage(1);
    }
  }

  const MoviesList = () => {
    if (movies && movies.length > 0) {
      return (
        <FlatList data={movies}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  onEndReachedThreshold={0.5}
                  onEndReached={fetchMoreMovies}
        />
      )
    } else {
      return (<Text style={styles.noFound}>Aucun film trouvé</Text>)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        onSearchPhraseUpdate={onSearchPhraseUpdate}
      />
      <View>
        { loading && (
          <ActivityIndicator size="large" />
        ) || (
         <MoviesList />
        )}
      </View>
    </SafeAreaView>
  );
};

export default PopularMoviesListScreen;
