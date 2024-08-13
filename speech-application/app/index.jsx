import { StatusBar } from 'expo-status-bar';
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from 'react-native';
import { Link, router } from 'expo-router';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
	const [fontsLoaded, error] = useFonts({
		'Inter': require('../assets/fonts/Inter.ttf'),
	  });
	
	  useEffect(() => {
		if (fontsLoaded) {
		  SplashScreen.hideAsync();
		}
		if (error) {
		  console.error('Error loading fonts', error);
		}
	  }, [fontsLoaded, error]);
	
	
	  if (!fontsLoaded) {
		return null; // Or a splash screen or loading component
	  }

	return (
		<View style={styles.container}>
			<View
				style={{
					height: vh(15),
					width: vw(100),
					marginTop: vh(15),
					paddingLeft: vw(10),
					marginBottom: vh(10),
				}}>
				<Text style={styles.titleText}>Welcome</Text>
				<Text style={styles.smallText}>
					Please sign in to get the most from our app
				</Text>
			</View>
			<View style={{ height: vh(5), width: vw(100) }}></View>
			<View style={styles.triangle}>
				<Image
					source={require('../assets/3kangaroos.png')}
					style={{
						position: 'absolute',
						top: -160,
						left: 0,
						right: 0,
						width: vw(100),
						height: undefined,
						aspectRatio: 2.0365,
					}}></Image>
			</View>
			<View style={styles.buttonBox}>
				<Pressable
					style={({ pressed }) => [
						styles.button,
						{ opacity: pressed ? 0.9 : 1 },
					]}
					onPress={() => router.push('/(auth)/signin')}>
					<Text style={styles.buttonText}>Sign In</Text>
				</Pressable>
				<Link href='/(auth)/signup'>
					<Pressable
						style={({ pressed }) => [
							styles.button,
							{ backgroundColor: '#FED9B7', opacity: pressed ? 0.9 : 1 },
						]}
						onPress={() => router.push('/(auth)/signup')}>
						<Text style={styles.buttonText}>Sign Up</Text>
					</Pressable>
				</Link>
				<StatusBar style='auto' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFCDC',
		alignItems: 'center',
		justifyContent: 'space-between',
		boxSizing: 'border-box',
	},
	titleText: {
		fontSize: 45,
		fontWeight: '800',
		fontFamily: 'Inter',
		paddingTop: 10,
	},
	smallText: {
		fontSize: 15,
		marginTop: 7,
		fontFamily: 'Inter',
	},
	triangle: {
		width: vw(100),
		height: 0,
		marginBottom: 0,
		borderTopWidth: 1,
		borderTopColor: '#FDFCDC',
		borderLeftWidth: 0,
		borderLeftColor: 'transparent',
		borderRightWidth: vw(100),
		borderRightColor: 'transparent',
		borderStyle: 'solid',
		backgroundColor: '#0081A7',
	},
	buttonBox: {
		backgroundColor: '#0081A7',
		width: vw(100),
		zIndex: -1,
		display: 'flex',
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		flexDirection: 'row',
		rowGap: 20,
	},
	button: {
		width: vw(70),
		// height: 'auto',
		backgroundColor: '#FDFCDC',
		borderRadius: 35,
		padding: 20,
		overflow: 'hidden',
	},
	buttonText: {
		textAlign: 'center',
		fontFamily: 'Inter',
		fontSize: 20,
	},
});

