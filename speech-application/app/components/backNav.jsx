import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';

const BackNav = () => {
	return (
		<View style={styles.container}>
			<Pressable style={styles.button} onPress={() => router.back()}>
				<Image
					source={require('../../assets/back-icon.png')}
					style={{
						width: '80%',
						height: 'auto',
						aspectRatio: 512 / 429,
						marginLeft: 'auto',
						marginRight: 'auto',
					}}></Image>
			</Pressable>
		</View>
	);
};

export default BackNav;

const styles = StyleSheet.create({
	container: {
		height: vh(10),
		width: '100%',
		backgroundColor: '#0081A7',
	},
	button: {
        padding: 15,
        paddingLeft: 20,
		margin: 'none',
		marginTop: 'auto',
		width: 60,
		alignItems: 'center',
        justifyContent: 'center',
	},
});

