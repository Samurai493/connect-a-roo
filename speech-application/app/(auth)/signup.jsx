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
import { Link } from 'expo-router';

const SignUp = () => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.background}>
				<View style={styles.uplift}>
					<Image
						source={require('../../assets/kangaroo.png')}
						style={{
							position: 'absolute',
							top: -90,
							left: 17,
							right: 0,
							width: 112,
							resizeMode: 'contain',
						}}></Image>
					<TextInput
						style={[{ marginTop: vh(10) }, styles.input]}
						placeholder='Email'
						placeholderTextColor='black'
					/>
					<TextInput
						style={styles.input}
						placeholder='Password'
						placeholderTextColor='black'
					/>
					<TextInput
						style={styles.input}
						placeholder='Confirm password'
						placeholderTextColor='black'
					/>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? '0.8' : '1',
							},
							styles.button,
						]}>
						<Text style={styles.buttonText}>Create Account</Text>
					</Pressable>
					<Link style={styles.smallText} href='/(auth)/signin'>
						Already have an account?
						<Text style={{ color: '#F07167' }}> Sign In</Text>
					</Link>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default SignUp;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#FDFCDC',
		alignItems: 'center',
		justifyContent: 'top',
		boxSizing: 'border-box',
	},
	titleText: {
		fontSize: 45,
		fontWeight: '800',
		fontFamily: 'Inter',
		paddingTop: 10,
		backgroundColor: '#FDFCDC',
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
		height: vh(75),
		marginTop: vh(25),
		borderRadius: 25,
		padding: 40,
		display: 'flex',
		flex: 1,
		alignContent: 'top',
		justifyContent: 'center',
		flexWrap: 'wrap',
		flexDirection: 'row',
		rowGap: 20,
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

