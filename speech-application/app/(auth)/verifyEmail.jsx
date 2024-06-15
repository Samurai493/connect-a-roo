import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';

const VerifyEmail = () => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.background}>
				<View style={styles.uplift}>
					<Image
						source={require('../../assets/kangaroo-question.png')}
						style={{
							position: 'absolute',
							top: -155,
							left: 17,
							right: 0,
							width: 112,
							resizeMode: 'contain',
						}}></Image>
					<Text style={styles.titleText}>Verify Your Email</Text>
					<Text style={styles.smallText}>
						Please enter the 4-digit code sent to your email
					</Text>
					<View style={styles.inputHolder}>
						<TextInput style={styles.input} placeholderTextColor='black' />
						<TextInput style={styles.input} placeholderTextColor='black' />
						<TextInput style={styles.input} placeholderTextColor='black' />
						<TextInput style={styles.input} placeholderTextColor='black' />
					</View>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? '0.8' : '1',
								marginBottom: 20,
								marginTop: 20,
							},
							styles.button,
						]}
						onPress={() => router.push('/(auth)/signin')}>
						<Text style={styles.buttonText}>Verify</Text>
					</Pressable>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default VerifyEmail;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#FDFCDC',
		alignItems: 'center',
		justifyContent: 'top',
		boxSizing: 'border-box',
	},
	titleText: {
		fontSize: 35,
		fontWeight: '800',
		fontFamily: 'Inter',
		paddingTop: 10,
		color: 'white',
		textAlign: 'center',
	},
	smallText: {
		fontSize: 15,
		marginTop: 7,
		fontFamily: 'Inter',
		color: 'white',
		width: vw(80),
		textAlign: 'center',
		padding: 10,
	},
	uplift: {
		backgroundColor: '#0081A7',
		width: vw(100),
		height: vh(55),
		marginTop: vh(45),
		borderRadius: 25,
		padding: 40,
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		flexWrap: 'wrap',
		flexDirection: 'row',
		paddingBottom: 100,
	},
	inputHolder: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		flexDirection: 'row',
		paddingBottom: 40,
		paddingTop: 40,
	},
	input: {
		width: 60,
		padding: 15,
		height: 70,
		backgroundColor: '#FDFCDC',
		fontSize: 18,
		borderRadius: 10,
		color: 'black',
		display: 'inline-block',
		// paddingLeft: 30,
	},
	button: {
		width: vw(80),
		// height: 'auto',
		backgroundColor: 'white',
		borderRadius: 31,
		fontFamily: 'Inter',
		padding: 15,
		overflow: 'hidden',
		backgroundColor: '#FED9B7',
	},
	buttonText: {
		fontSize: 24,
		textAlign: 'center',
	},
});

