import React, { useRef, useState } from "react";
import { StatusBar, StyleSheet, TextInput, View } from "react-native";
import { debounce } from "lodash";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 5,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: 'rgb(240, 240, 240)'
  },
  input: {
    width: '85%'
  },
  clear: {
    backgroundColor: 'rgb(240, 240, 240)'
  }
});

const DEBOUNCE_TIME = 300; // MS
const SearchBar = ({ onSearchPhraseUpdate, onClear }) => {
  const inputRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  const onChangeText = debounce((value) => {
    if (onSearchPhraseUpdate && typeof onSearchPhraseUpdate === "function")  {
      onSearchPhraseUpdate(value);
    }
  }, DEBOUNCE_TIME);

  const clear = () => {
    if (onClear && typeof onClear === "function")  {
      onClear();
    }
    inputRef.current.clear();
    inputRef.current.blur();
    setClicked(false);
  }

  const onInputFocus = () => {
    setClicked(true);
  }

  return (
    <View style={styles.container}>
      <Icon name="search" size={12} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        ref={inputRef}
        onChangeText={onChangeText}
        onFocus={onInputFocus}
      />
      { clicked && (
        <Icon.Button
          style={styles.clear}
          onPress={clear}
          name="remove"
          size={12}
          color="black" />
      )}
    </View>

  );
};

export default SearchBar;
