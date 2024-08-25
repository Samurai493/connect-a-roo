import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';

const ButtonWithIcon = (iconRoute) => {
	iconRoute = iconRoute.iconRoute;
	const iconMap = {
		back: require('../../assets/back-icon.png'),
		search: require('../../assets/search-icon.png'),
		settings: require('../../assets/settings-icon.png'),
	};
	const iconLinkMap = {
		search: '/(auth)/signin',
		settings: '/settings',
	};
	return (
		<View style={styles.button}>
			<Pressable
				style={{
					width: '100%',
					height: '100%',
					textAlign: 'center',
					justifyContent: 'center',
					alignContent: 'center',
				}}
				onPress={() => {
					if (iconRoute === 'back') {
						router.back();
					} else {
						router.push(iconLinkMap[iconRoute]);
					}
				}}>
				<Image
					source={iconMap[iconRoute]}
					style={{
						width: '60%',
						height: 'auto',
						aspectRatio: 1,
						marginLeft: 'auto',
						marginRight: 'auto',
					}}></Image>
			</Pressable>
		</View>
	);
};

const BottomNav = (backExists) => {
	return (
		<View style={styles.container}>
			<ButtonWithIcon iconRoute='back' />
			<ButtonWithIcon iconRoute='search' />
			<ButtonWithIcon iconRoute='settings' />
		</View>
	);
};

export default BottomNav;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		width: '100%',
		display: 'flex',
		bottom: 0,
		height: '10%',
		backgroundColor: '#0081A7',
		maxHeight: 100,
		justifyContent: 'space-evenly',
		gap: 50,
		// paddingRight: 20,
		// paddingLeft: 20,
		flexDirection: 'row',
		// paddingTop: 10,
		// paddingBottom: 10,
		alignItems: 'center',
	},
	button: {
		width: 50,
		aspectRatio: 1,
		// padding: 20,
	},
});

