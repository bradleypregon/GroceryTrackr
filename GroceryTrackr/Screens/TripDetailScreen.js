import { FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ListItem } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";

// dummy data
var testItems = [
	{
		brand: "Frito Lay",
		item: "Doritos",
		price: 2.5,
		quantity: 1,
		subtotal: 2.5,
	},
	{
		brand: "Pepsi",
		item: "Mountain Dew",
		price: 2.5,
		quantity: 2,
		subtotal: 5.0,
	},
];

const TripDetailScreen = (item) => {
	const keyExtractor = (item, index) => index.toString();

	const renderItem = ({ item }) => (
		<ListItem
			Component={TouchableScale}
			friction={20}
			tension={100}
			activeScale={0.9}
			containerStyle={{
				width: "90%",
				borderRadius: 5,
				overflow: "hidden",
				borderWidth: 0.5,
				borderColor: "gray",
				margin: 3,
				justifyContent: "center",
				alignSelf: "center",
			}}
		>
			<ListItem.Content>
				<ListItem.Title>{item.item}</ListItem.Title>
				<ListItem.Subtitle>{item.brand}</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);

	return (
		<SafeAreaProvider>
			<FlatList
				keyExtractor={keyExtractor}
				data={testItems}
				renderItem={renderItem}
				contentInsetAdjustmentBehavior="automatic"
			/>
		</SafeAreaProvider>
	);
};

export default TripDetailScreen;
