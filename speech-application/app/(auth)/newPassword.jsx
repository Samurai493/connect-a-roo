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

const NewPassword = () => {
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
                    <Text style={styles.titleText}>Create New Password</Text>
					<TextInput
						style={[styles.input]}
						placeholder='New Password'
						placeholderTextColor='black'
					/>
					<TextInput
						style={styles.input}
						placeholder='Confirm Password'
						placeholderTextColor='black'
					/>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? '0.8' : '1',
							},
							styles.button,
						]}>
						<Text style={styles.buttonText}>Reset Password</Text>
					</Pressable>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default NewPassword;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FDFCDC',
        display: 'flex',
        justifyContent: 'top',
        boxSizing: 'border-box',
    },
    titleText: {
		width: vw(80),
		padding: 15,
		fontSize: 18,
		borderRadius: 31,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
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
		alignItems: 'center',
		justifyContent: 'start',
		flexWrap: 'wrap',
		flexDirection: 'column',
		rowGap: 20,
	},
	input: {
		width: vw(80),
		padding: 15,
		fontSize: 18,
		borderRadius: 31,
		color: 'black',
		backgroundColor: '#FDFCDC',
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

