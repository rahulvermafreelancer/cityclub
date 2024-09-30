import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchText = () => {
    console.log(searchText);
    setSearchText('');
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputSearch}>
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.searchBox}
          placeholder="Search"
          placeholderTextColor="#fff"
          cursorColor="#fff"
        />
      </View>
      <TouchableOpacity onPress={handleSearchText} style={styles.searchButton}>
        <FontAwesome name="search" color="#fff" style={styles.iconDesign} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '4%',
  },
  iconDesign: {
    fontSize: 30,
  },
  searchBox: {
    color: '#fff',
    marginLeft: '5%',
    fontSize: 18,
  },
  searchButton: {
    marginLeft: '4%',
  },
  inputSearch: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '85%',
    borderRadius: 10,
    opacity: 0.6,
  },
});

export default SearchBar;
