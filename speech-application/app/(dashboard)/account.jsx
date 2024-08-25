import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';
import BackNav from '../components/backNav.jsx';
import ListItem from '../components/list.jsx';

const Account = () => {
	return (
		<View style={styles.container}>
			<BackNav />
			<Text style={styles.heading}>Account</Text>
			<View style={styles.mainArea}>
				<ListItem
					info={{
						title: 'NA',
						listItems: [
							{
                                title: 'First Name',
                                value: 'John',
								type: 'text',
                                noLogo: true
                            },
                            {
                                title: 'Last Name',
                                value: 'Doe',
								type: 'text',
                                noLogo: true
							},
                            {
                                title: 'Email',
                                value: 'johndoe@example.com',
								type: 'text',
                                noLogo: true
							},
						],
					}}
				/>
				<ListItem
					info={{
						title: 'Password',
						listItems: [
							{
								title: 'Current Password',
								type: 'input',
                                noLogo: true,
                            },
                            {
								title: 'New Password',
								type: 'input',
                                noLogo: true,
                            },
                            {
								title: 'Confirm New Password',
								type: 'input',
                                noLogo: true,
							},
						]
					}}/>
			</View>
		</View>
	);
};

export default Account;

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
        fontFamily: 'Inter'
	},
	mainArea: {
		backgroundColor: '#FDFCDC',
		flex: 1,
	},
});

