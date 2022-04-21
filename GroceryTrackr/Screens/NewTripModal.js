import { View, StyleSheet, Text, Button } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DateTimePicker from "@react-native-community/datetimepicker";

/*
    Store
    Location
    Date
    Items (null)
*/

var stores = [
	{ label: "HyVee", value: "Hyvee" },
	{ label: "Wal-Mart", value: "Wal-Mart" },
	{ label: "Aldi's", value: "Aldi's" },
	{ label: "Everybody's WF", value: "Everybody's WF" },
	{ label: "Target", value: "Target" },
	{ label: "Menards", value: "Menards" },
];

const NewTripModal = () => {
	const [storeValue, setStoreValue] = useState(null);
	const [isFocus, setStoreIsFocus] = useState(false);

	const [date, setDate] = useState(new Date());

	const onDateChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setDate(currentDate);

		console.log(currentDate);
	};

	let selectedCity = "";

	return (
		<View style={styles.container}>
			<Text style={styles.headerTextStyle}>Store</Text>
			<Dropdown
				style={styles.dropdown}
				containerStyle={{
					borderWidth: 0.5,
					borderColor: "gray",
					borderRadius: 5,
					overflow: "hidden",
				}}
				data={stores}
				search
				maxHeight={"40%"}
				labelField="label"
				valueField="value"
				placeholder="Select store..."
				placeholderStyle={styles.dropdownPlaceholder}
				searchPlaceholder="search..."
				selectedTextStyle={{ marginLeft: 10 }}
				value={storeValue}
				onFocus={() => setStoreIsFocus(true)}
				onBlur={() => setStoreIsFocus(false)}
				onChange={(item) => {
					setStoreValue(item.value);
					setStoreIsFocus(false);
				}}
			/>

			<Text style={styles.headerTextStyle}>Location</Text>

			<GooglePlacesAutocomplete
				placeholder="Select Location"
				onPress={(data, details = null) => {
					selectedCity = data.description;
					console.log(selectedCity);
				}}
				query={{
					key: process.env.GOOGLE_TOKEN,
					language: "en",
					types: "(cities)",
				}}
				fetchDetails={true}
				styles={{
					container: {
						flex: 1,
						maxHeight: 200,
					},
					textInput: {
						height: 50,
						borderColor: "gray",
						borderWidth: 0.5,
						borderRadius: 8,
						margin: 5,
					},
					row: {
						backgroundColor: "#FFFFFF",
						padding: 13,
						height: 35,
						flexDirection: "row",
						alignItems: "center",
					},
					poweredContainer: {
						opacity: 0,
					},
				}}
			/>

			<Text style={styles.headerTextStyle}>Date</Text>
			<View
				style={{
					borderWidth: 0.5,
					borderColor: "black",
					justifyContent: "space-between",
					alignItems: "stretch",
				}}
			>
				<DateTimePicker
					mode={"date"}
					display="calendar"
					value={date}
					dateFormat="dayofweek day month"
					onChange={onDateChange}
					style={{ height: 50 }}
				/>
			</View>

			<Button onPress={() => alert("Button pressed")} title="Create New Item" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	headerTextStyle: {
		color: "gray",
		margin: 5,
	},
	dropdown: {
		height: 50,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		margin: 5,
		backgroundColor: "white",
	},
	dropdownPlaceholder: {
		color: "gray",
		marginLeft: 10,
	},

	textInputStyle: {
		borderWidth: 0.5,
		borderColor: "gray",
		borderRadius: 8,
		height: 40,
	},
});

export default NewTripModal;
