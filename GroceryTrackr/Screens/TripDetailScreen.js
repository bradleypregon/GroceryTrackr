import { StyleSheet, View, FlatList } from 'react-native';
import uuid from 'react-native-uuid';

import TripDetailItem from './TripDetailItem';

// dummy data
var testItems = [
{
  brand: "Frito Lay",
  item: "Doritos",
  key: uuid.v4(),
  price: 2.5,
  quantity: 1,
  subtotal: 2.5,
},
{ 
  brand: "Pepsi",
  item: "Mountain Dew",
  key: uuid.v4(),
  price: 2.5,
  quantity: 2,
  subtotal: 5.00,
},
]

const TripDetailScreen = (item) => {
  return(
    <View style={styles.container}>

      <FlatList
        data={testItems}
        renderItem={({item}) => {
          return (
            <TripDetailItem
              brand={item.brand}
              item={item.item}
              price={item.price}
              quantity={item.quantity}
            />
          );
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  listStyle: {
    width: '90%', 
    padding: 10
  },
});

export default TripDetailScreen;