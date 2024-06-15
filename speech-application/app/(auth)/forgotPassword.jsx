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

const ForgotPassword = () => {
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
					<Text style={styles.titleText}>Forgot Password?</Text>
					<Text style={styles.smallText}>
						Please enter your email to receive a verification code
					</Text>
					<TextInput
						style={[{ marginTop: vh(5) }, styles.input]}
						placeholder='Email'
						placeholderTextColor='black'
					/>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? '0.8' : '1',
								marginBottom: 20,
								marginTop: 20,
							},
							styles.button,
						]}
						onPress={() => router.push('/(auth)/verifyEmail')}>
						<Text style={styles.buttonText}>Send email</Text>
					</Pressable>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ForgotPassword;

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
	input: {
		width: vw(80),
		padding: 15,
		backgroundColor: '#FDFCDC',
		fontSize: 18,
		borderRadius: 31,
		color: 'black',
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

