import { Appearance } from "react-native";
import { useState } from "react";

import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TripsScreen from "./Screens/TripsScreen";
import TripDetailScreen from "./Screens/TripDetailScreen";

import NewTripModal from "./Screens/NewTripModal";

export default function App({ navigation }) {
	const Stack = createNativeStackNavigator();

	const [theme, setTheme] = useState(Appearance.getColorScheme());
	Appearance.addChangeListener((scheme) => {
		setTheme(scheme.colorScheme);
	});

	return (
		<NavigationContainer theme={theme == "dark" ? DarkTheme : DefaultTheme}>
			<Stack.Navigator initialRouteName={"TripsScreen"}>
				<Stack.Group>
					<Stack.Screen
						name="TripsScreen"
						component={TripsScreen}
						options={{
							title: "Trips",
							headerLargeTitle: true,
						}}
					/>
					<Stack.Screen
						name="TripDetailScreen"
						component={TripDetailScreen}
						options={({ route }) => ({
							title: route.params.name,
							headerLargeTitle: true,
						})}
					/>
				</Stack.Group>

				<Stack.Group screenOptions={{ presentation: "modal" }}>
					<Stack.Screen name="NewTripModal" component={NewTripModal} />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
