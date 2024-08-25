import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';
import BackNav from '../components/backNav.jsx';
import ListItem from '../components/list.jsx';

const Feedback = () => {
	return (
		<View style={styles.container}>
			<BackNav />
			<Text style={styles.heading}>Feedback</Text>
			<View style={styles.mainArea}>
				<ListItem
					info={{
						title: 'NA',
						listItems: [
							{
								type: 'fivestar',
								value: 4,
							},
							{
								type: 'textarea',
								title: 'Care to share more about it?',
								route: '/(dashboard)/account',
								height: 150,
								logo: require('../../assets/account.png'),
							},
							{
								type: 'longButton',
								title: 'Send Feedback',
							},
						],
					}}
				/>
			</View>
		</View>
	);
};

export default Feedback;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FDFCDC',
		flex: 1,
		gap: 0,
	},
	heading: {
		color: 'black',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'left',
		marginBottom: 20,
		backgroundColor: '#0081A7',
		paddingLeft: 20,
		paddingRight: 20,
		padding: 20,
		fontFamily: 'Inter',
	},
	mainArea: {
		backgroundColor: '#FDFCDC',
		flex: 1,
	},
});

