import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.bgColor}>
      <StatusBar />
      <View>
        <Text>Profile Screen</Text>
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
export default ProfileScreen;
