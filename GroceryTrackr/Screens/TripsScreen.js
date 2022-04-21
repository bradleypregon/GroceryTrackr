import { FlatList, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ListItem } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";

import React from "react";

// Dummy Data
var testData = [
	{
		store: "HyVee",
		location: "Fairfield, IA",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "Wal-Mart",
		location: "Fairfield, IA",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "Aldi's",
		location: "Ottumwa",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "HyVee",
		location: "Fairfield, IA",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "Wal-Mart",
		location: "Fairfield, IA",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "Aldi's",
		location: "Ottumwa",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "HyVee",
		location: "Fairfield, IA",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "Wal-Mart",
		location: "Fairfield, IA",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "Aldi's",
		location: "Ottumwa",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "HyVee",
		location: "Fairfield, IA",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "Wal-Mart",
		location: "Fairfield, IA",
		items: ["item 1", "item 2"],
		date: Date(),
	},
	{
		store: "Aldi's",
		location: "Ottumwa",
		items: ["item 1", "item 2"],
		date: Date(),
	},
];

function TripsScreen({ navigation }) {
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Button
					onPress={() => navigation.navigate("NewTripModal")}
					title="New"
				/>
			),
		});
	});

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
			onPress={() =>
				navigation.navigate("TripDetailScreen", { name: item.store })
			}
		>
			<ListItem.Content>
				<ListItem.Title>{item.store}</ListItem.Title>
				<ListItem.Subtitle>
					{item.location} - {item.date}
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);

	return (
		<SafeAreaProvider>
			<FlatList
				keyExtractor={keyExtractor}
				data={testData}
				renderItem={renderItem}
				contentInsetAdjustmentBehavior="automatic"
			/>
		</SafeAreaProvider>
	);
}

export default TripsScreen;
