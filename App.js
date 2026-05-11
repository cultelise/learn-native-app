import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
	StickyHeaderComponent,
	Animated,
} from 'react-native';

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString(), completed: false },
		]);
		/* For making many entries at once

		const newGoals = [];

		// 1. Loop and push to the temporary array
		for (let step = 0; step < 20; step++) {
			newGoals.push({
				text: step.toString(),
				id: Math.random().toString(),
				completed: false,
			});
		}

		// 2. Update the state exactly once
		setCourseGoals((currentCourseGoals) => {
			const updatedGoals = [...currentCourseGoals, ...newGoals];
			console.log(updatedGoals);
			return updatedGoals;
		}); */
	}
	function completeGoal(pressedGoalId) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.map((goal) => {
				if (goal.id === pressedGoalId) {
					return { ...goal, completed: !goal.completed };
				}
				return goal;
			});
		});
	}
	// const MyCustomStickyWrapper = (props) => {
	// 	return (
	// 		<Animated.View style={{ backgroundColor: 'red', elevation: 5 }}>
	// 			{props.children}
	// 		</Animated.View>
	// 	);
	// };
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
				<ScrollView
					stickyHeaderIndices={[0]}
					// StickyHeaderComponent={MyCustomStickyWrapper}
				>
					<View style={styles.header}>
						<Text>List of Goals</Text>
					</View>
					{courseGoals.map((goal) => (
						<Text
							style={[styles.listItem, goal.completed && styles.listItemDone]}
							key={goal.id}
							onPress={() => completeGoal(goal.id)}
						>
							{goal.text}
						</Text>
					))}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		fontWeight: 'bold',
		fontSize: 50,
	},
	appContainer: {
		flex: 1,
		padding: 50,
		paddingHorizontal: 16,
		alignContent: 'center',
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginBottom: 34,
		borderBottomWidth: 3,
		borderBottomColor: 'black',
	},
	listContainer: {
		flex: 7,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		padding: 8,
	},
	listItem: {
		fontSize: 20,
		fontWeight: 'bold',
		padding: 5,
		marginBottom: 3,
		borderBottomWidth: 3,
		borderBottomColor: 'black',
		borderRadius: 6,
		backgroundColor: 'pink',
	},
	listItemDone: {
		fontSize: 20,
		fontWeight: 'bold',
		padding: 5,
		marginBottom: 3,
		borderBottomWidth: 3,
		borderBottomColor: 'black',
		textDecorationLine: 'line-through',
		backgroundColor: 'pink',
		borderRadius: 6,
	},
});
