import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	Button,
	Input,
} from 'react-native';
import React from 'react';
import BottomNav from '../components/bottomNav.jsx';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Home = () => {
	return (
		<View style={styles.container}>
			<View style={styles.topbar}>
				<TextInput style={styles.topbarInput}></TextInput>
				<Pressable style={styles.topbarButton}>
					<Image
						source={require('../../assets/backspace.png')}
						style={{
							width: '80%',
							height: 'auto',
							aspectRatio: 512 / 429,
							marginLeft: 'auto',
							marginRight: 'auto',
						}}></Image>
				</Pressable>
			</View>
			<View style={styles.wordsGrid}>
				<Row>
					<Pressable style={[styles.wordButton, styles.wordOrange]}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={[styles.wordButton, styles.wordOrange]}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={[styles.wordButton, styles.wordOrange]}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={[styles.wordButton, styles.wordOrange]}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={[styles.wordButton, styles.wordOrange]}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
				</Row>
				<Row>
					<Pressable style={[styles.wordButton, styles.wordOrange]}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
				</Row>
				<Row>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
				</Row>
				<Row>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
				</Row>
				<Row>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
				</Row>
				<Row>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton}>
						<Text style={styles.wordText}>Word </Text>
					</Pressable>
					<Pressable style={styles.wordButton} onPress={() => router.push('/(dashboard)/addWord')}>
						<Image style={[styles.wordText, {width: 20, height: 20}]} source={require('../../assets/plusicon.png')}></Image>
					</Pressable>
				</Row>
            </View>
            <BottomNav backExists={true}></BottomNav>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: vh(100),
		width: vw(100),
		backgroundColor: '#FDFCDC',
	},
	topbar: {
		// height: vh(15),
		minHeight: 130,
		width: vw(100),
		marginTop: 0,
		padding: 10,
		backgroundColor: '#0081A7',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 10,
	},
	topbarInput: {
		width: '80%',
		backgroundColor: '#FDFCDC',
		height: 50,
		marginTop: 'auto',
		borderRadius: 5,
		padding: 5,
		paddingLeft: 10,
		fontSize: 20,
	},
	topbarButton: {
		backgroundColor: '#FDFCDC',
		height: 50,
		marginTop: 'auto',
		borderRadius: 5,
		padding: 10,
		fontSize: 20,
		flex: 1,
		textAlign: 'center',
	},
	wordsGrid: {
		display: 'flex',
		width: '100%',
		gap: 10,
		padding: 10,
		paddingTop: 20,
		paddingBottom: 20,
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		gap: 10,
		width: '100%',
	},
	wordButton: {
		backgroundColor: 'white',
		padding: 10,
		flex: '1 1 0',
		aspectRatio: 1,
		borderRadius: 5,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	wordText: {
		fontSize: 16,
	},
	wordOrange: {
		backgroundColor: '#FADAB7',
	},
	wordLightTan: {
		backgroundColor: '#FFEBAF',
	},
	wordPink: {
		backgroundColor: '#FFD5E8',
	},
	wordMagenta: {
		backgroundColor: '#FFB0C7',
	},
	wordPurple: {
		backgroundColor: '#D4CDE5',
	},
	wordBlue: {
		backgroundColor: '#CCF8F5',
	},
	wordGreen: {
		backgroundColor: '#CFF0C8',
	},
	wordLightPurple: {
		backgroundColor: '#DFE1E4',
	},
});

export default Home;

