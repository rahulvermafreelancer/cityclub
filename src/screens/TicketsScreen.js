import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

const TicketsScreen = () => {
  return (
    <SafeAreaView style={styles.bgColor}>
      <StatusBar />
      <View>
        <Text>Tickets Screen</Text>
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
export default TicketsScreen;
