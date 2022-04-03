import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

/*
    Store
    Location
    Date
    Items (null)
*/

const NewTripModal = () => { 
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextStyle}>Store</Text>
      <TextInput 
        placeholder="Enter Store Name"
        style={styles.textInputStyle}
      />

      <Text style={styles.headerTextStyle}>Location</Text>
      <TextInput 
        placeholder="Enter Location"
        style={styles.textInputStyle}
      />

      <Text style={styles.headerTextStyle}>Date</Text>
      <Text>Date picker placeholder</Text>

      <Button
        onPress={() => alert("Button pressed")}
        title="Create New Item"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  headerTextStyle: {
    color: 'gray'
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default NewTripModal;