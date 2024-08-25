import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';
import BackNav from '../components/backNav.jsx';
import ListItem from '../components/list.jsx';

const Bug = () => {
	return (
		<View style={styles.container}>
			<BackNav />
			<Text style={styles.heading}>Report a Bug</Text>
			<View style={styles.mainArea}>
				<ListItem
					info={{
						title: 'NA',
						listItems: [
							{
                                type: 'textarea',
                                title: 'What went wrong?',
                                placeholder: 'Please include steps to reproduce, actual results, and expected results.',
                                route: '/(dashboard)/account',
                                height: 150,
								logo: require('../../assets/account.png'),
							},
                            {
                                title: 'Add screen recording',
                                type: 'upload',
								logo: require('../../assets/video.png'),
                            },
                            {
                                type: 'upload',
                                title: 'Add photo from gallery',
								logo: require('../../assets/addImage.png'),
                            },
                            {
                                type: 'longButton',
                                title: 'Report Bug',
                                
                            }
						],
					}}
				/>
			</View>
		</View>
	);
};

export default Bug;

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

