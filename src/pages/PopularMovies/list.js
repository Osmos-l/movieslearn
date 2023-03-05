import React, { useEffect, useState } from "react";
import { FlatList, Text, View, SafeAreaView, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { getPopularMoviesByPage, searchMoviesByNameAndPage } from "../../services/TMDBService";
import PopularMovieListItem from '../../components/PopularMovieListItem';
import SearchBar from '../../components/SearchBar';
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5
  },
  secondContainer: {
    flex: 2,
  },
  nothingFound: {
    flex: 3,
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center'
  }
});

const PopularMoviesListScreen = ({ navigation }) => {
  // PopularMovies
  const [movies, setMovies] = useState([]);

  // SearchBar
  const [searchPhrase, setSearchPhrase] = useState(null);

  // Other
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [nothingFound, setNothingFound] = useState(false);

  const fetchMoviesByPage = async () => {
    const fetchedMovies = await (searchPhrase && searchPhrase.length > 0 ?
      searchMoviesByNameAndPage(searchPhrase, page) : getPopularMoviesByPage(page))

    const newMovies = page === 1 ? fetchedMovies : movies.concat(fetchedMovies);

    setNothingFound(!newMovies || newMovies.length <= 0);
    setMovies(newMovies);

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

    if (page != 1) {
      setPage(1);
    }

    setSearchPhrase(value);
  }

  const onSearchClear = () => {
   // setLoading(true);

    if (page != 1) {
      setPage(1);
    }

    setSearchPhrase(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        onSearchPhraseUpdate={onSearchPhraseUpdate}
        onClear={onSearchClear}
      />
      <View style={styles.secondContainer}>
        { loading && (
          <ActivityIndicator size="large" />
        ) }
        { nothingFound && (
          <View style={styles.nothingFound}>
            <Icon name="warning" size={36} color="black" />
            <Text>Aucun film trouvé</Text>
          </View>
        ) || (
          <FlatList data={movies}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    onEndReachedThreshold={0.5}
                    onEndReached={fetchMoreMovies}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default PopularMoviesListScreen;
