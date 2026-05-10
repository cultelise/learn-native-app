import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput placeholder='your course goal' style={styles.textInput} />
				<Button title='add goal' />
			</View>
			<View style={styles.listContainer}>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	listContainer: {
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
