import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchText = () => {
    console.log(searchText);
    setSearchText('');
  };

  return (
    <View>
      <TextInput
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <TouchableOpacity onPress={handleSearchText}>
        <FontAwesome name="search" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
