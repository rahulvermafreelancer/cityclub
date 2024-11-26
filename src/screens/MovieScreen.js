import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const MovieScreen = () => {
  return (
    <SafeAreaView style={styles.bgColor}>
      <StatusBar />
      <View>
        <Text>Movie Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#000000',
    flex: 1,
  },
});
export default MovieScreen;
