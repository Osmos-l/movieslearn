import React, { useState } from "react";
import { StatusBar, StyleSheet, TextInput } from "react-native";
import { debounce } from "lodash";

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
  const onChangeText = debounce((value) => {
    console.log(value);
    if (onSearchPhraseUpdate && typeof onSearchPhraseUpdate === "function")  {
      onSearchPhraseUpdate(value);
    }
  }, 200);

  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={onChangeText}
    />
  );
};

export default SearchBar;
