import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	function goalInputHandler(enteredText) {
		console.log(enteredText);
	}

	function addGoalHandler() {}
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='your course goal'
					style={styles.textInput}
					onChangeText={goalInputHandler}
				/>
				<Button title='add goal' onPress={addGoalHandler} />
			</View>
			<View style={styles.listContainer}>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		padding: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
	},
	listContainer: {
		flex: 5,
		justifyContent: 'center',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '80%',
		marginRight: 8,
		padding: 8,
	},
});
