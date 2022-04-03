import { StyleSheet, View, Text } from "react-native";

const TripDetailItem = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.brand}</Text>
      <Text>{props.item}</Text>
      <Text>${props.price}</Text>
      <Text>x{props.quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 1
  },
});

export default TripDetailItem