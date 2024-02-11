import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		maxHeight: "100%",
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		backgroundColor: "white"
	},
	gestureContainer: {
		alignSelf: "stretch",
		alignItems: "center",
		marginTop: 8
	},
	gestureItem: {
		width: 40,
		height: 4,
		borderRadius: 2,
		backgroundColor: "gray"
	},
	header: {
		paddingTop: 0
	},
	headerSubContainer: {
		backgroundColor: "white"
	}
});
