import { StyleSheet, View, Text } from 'react-native';

const TripItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>{props.store} - {props.location}</Text>
        <Text style={styles.textStyle}>{props.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Outer Box
  container: {
    flex: 1,
    height: '10%',
    padding: 5
  },
  // Inner Box
  innerContainer: {
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  textStyle: {
    padding: 10, 
    color: 'white'
  }
});

export default TripItem;