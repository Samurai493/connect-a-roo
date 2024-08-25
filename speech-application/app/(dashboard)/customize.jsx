import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';
import BackNav from '../components/backNav.jsx';
import ListItem from '../components/list.jsx';

const Customize = () => {
	return (
		<View style={styles.container}>
			<BackNav />
			<Text style={styles.heading}>Customize</Text>
			<View style={styles.mainArea}>
				<ListItem
					info={{
						title: 'Appearance',
						listItems: [
							{
								title: 'Background Color',
								type: 'route',
								route: '/(dashboard)/account',
								logo: require('../../assets/sparkle.png'),
							},
                            {
                                title: 'Text',
                                type: 'text',
                                value: 'Default',
								logo: require('../../assets/text.png'),
                            },
                            {
                                title: 'Skin Tone for Icons Color',
                                type: 'text',
                                value: 'Default',
								logo: require('../../assets/paint.png'),
                            },
                            {
                                title: 'Words Per Page',
                                type: 'text',
                                value: 'Default (35)',
								logo: require('../../assets/page.png'),
                            },
						],
					}}
				/>
				<ListItem
					info={{
						title: 'Language',
						listItems: [
							{
								title: 'Speech',
                                type: 'text',
                                value: 'Default',
								logo: require('../../assets/speech.png')
							}
						]
					}}/>
			</View>
		</View>
	);
};

export default Customize;

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

