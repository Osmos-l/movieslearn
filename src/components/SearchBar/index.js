import React, { useState } from "react";
import { StatusBar, StyleSheet, TextInput } from "react-native";
import { debounce } from "lodash";

const styles = StyleSheet.create({
  searchBar: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: 'rgb(240, 240, 240)'
  }
});

const DEBOUNCE_TIME = 300; // MS
const SearchBar = ({ onSearchPhraseUpdate }) => {
  const onChangeText = debounce((value) => {
    if (onSearchPhraseUpdate && typeof onSearchPhraseUpdate === "function")  {
      onSearchPhraseUpdate(value);
    }
  }, DEBOUNCE_TIME);

  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={onChangeText}
    />
  );
};

export default SearchBar;
