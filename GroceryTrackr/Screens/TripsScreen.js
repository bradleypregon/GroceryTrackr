import { FlatList, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import TripItem from './TripItem';
import uuid from 'react-native-uuid';
import React from 'react';

// Dummy Data
var testData = [
  {
  store: "HyVee",
  location: "fairfield",
  key: uuid.v4(),
  items: ["item 1", "item 2"],
  date: Date()
},
{
  store: "WalMart",
  location: "fairfield",
  key: uuid.v4(),
  items: ["item 1", "item 2"],
  date: Date()
},
{
  store: "Aldi's",
  location: "Ottumwa",
  key: uuid.v4(),
  items: ["item 1", "item 2"],
  date: Date()
}]

function TripsScreen({navigation}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('NewTripModal')}
          title="New"
        />
    )
    })
  })
  

  return (
    <View style={styles.container}>
      <FlatList
        data={testData}
        renderItem={({item}) => {
          return(
            <TouchableOpacity onPress={() => navigation.navigate('TripDetailScreen', {name: item.store} )}>
              <TripItem
                store={item.store}
                location={item.location}
                date={item.date}
              />
            </TouchableOpacity>
          )
        }}
        
        contentInsetAdjustmentBehavior="automatic"
        style={styles.listStyle}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  listStyle: {
    width: '90%', 
    padding: 10
  }
});

export default TripsScreen;