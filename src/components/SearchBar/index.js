import React, { useState } from "react";
import { StatusBar, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    fontSize: 20
  }
});

const SearchBar = ({ onSearchPhraseUpdate }) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const onChangeText = (value) => {
    setSearchPhrase(value);
    if (onSearchPhraseUpdate && typeof onSearchPhraseUpdate === "function")  {
      onSearchPhraseUpdate(value);
    }
  }

  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={onChangeText}
      value={searchPhrase}
    />
  );
};

export default SearchBar;
