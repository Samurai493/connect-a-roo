import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';
import BackNav from '../components/backNav.jsx';
import ListItem from '../components/list.jsx';

const Settings = () => {
	return (
		<View style={styles.container}>
			<BackNav />
			<Text style={styles.heading}>Settings</Text>
			<View style={styles.mainArea}>
				<ListItem
					info={{
						title: 'General',
						listItems: [
							{
								title: 'Account',
								type: 'route',
								route: '/(dashboard)/account',
								logo: require('../../assets/account.png'),
							},
                            {
                                title: 'Notifications',
                                type: 'bool',
								value: true,
								logo: require('../../assets/notifications.png'),
                            },
                            {
                                title: 'Customize',
                                type: 'route',
								route: '/(dashboard)/customize',
								logo: require('../../assets/customize.png'),
                            },
                            {
                                title: 'Logout',
                                type: 'route',
								route: '/(auth)/logout',
								logo: require('../../assets/logout.png'),
                            },
						],
					}}
				/>
				<ListItem
					info={{
						title: 'Feedback',
						listItems: [
							{
								title: 'Report a bug',
								type: 'route',
								route: '/(dashboard)/bug',
								logo: require('../../assets/bug.png')
							},
							{
								title: 'Send feedback',
								type: 'route',
								route: '/(dashboard)/feedback',
								logo: require('../../assets/send.png')
							}
						]
					}}/>
			</View>
		</View>
	);
};

export default Settings;

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

