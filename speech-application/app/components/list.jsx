import React from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	TextInput,
} from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link, router } from 'expo-router';

const ListItem = ({ info }) => {
	return (
		<View style={styles.listItem}>
			{info.title === 'NA' ? null : (
				<Text style={styles.listTitle}>{info.title}</Text>
			)}
			<FlatList
				style={styles.listContainer}
				data={info.listItems}
				scrollEnabled={false}
				renderItem={({ item }) => (
					<View
						style={[
							styles.itemContainer,
							{
								flexDirection: item.type === 'textarea' ? 'column' : 'row',
								alignItems: item.type === 'textarea' ? 'flex-start' : 'center',
								borderBottomWidth: item.type === 'longButton' ? 0 : 1,
							},
						]}>
						{item.type === 'fivestar' && (
							<>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
									{[1, 2, 3, 4, 5].map((star) => (
										<Image
											source={require('../../assets/whiteStar.png')}
											style={{
												width: 50,
												height: 50,
												aspectRatio: 1,
												marginRight: 10,
												resizeMode: 'contain',
												tintColor: item.value >= star ? '#F5B700' : '#E5E5E5',
												marginBottom: 10,
											}}
										/>
									))}
								</View>
							</>
						)}

						{item.type === 'textarea' && (
							<>
								<Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
									{item.title}
								</Text>
								<TextInput
									multiline={true}
									style={{
										backgroundColor: 'white',
										padding: 5,
										width: '100%',
										borderRadius: 5,
										borderWidth: 0.5,
										borderColor: '#000',
										height: item.height || 100,
										marginBottom: 10,
									}}
									placeholder={item.placeholder}
									onChangeText={() => {}}></TextInput>
							</>
						)}
						{item.type === 'longButton' && (
							<Pressable
								style={{
									backgroundColor: '#FED9B7',
									padding: 10,
									paddingLeft: 20,
									paddingRight: 20,
									borderRadius: 10,
									color: 'black',
									marginRight: 10,
									width: '100%',
									justifyContent: 'center',
									marginTop: 10,
								}}
								onPress={() => {
									router.push(item.route);
								}}>
								<Text
									style={{
										color: 'black',
										fontSize: 16,
										marginLeft: 'auto',
										marginRight: 'auto',
									}}>
									{item.title}
								</Text>
							</Pressable>
						)}
						{item.type !== 'textarea' && item.type !== 'longButton' && (
							<>
								{item.noLogo ? null : (
									<Image
										source={item.logo}
										style={{
											width: 20,
											aspectRatio: 1,
											marginRight: 30,
											resizeMode: 'contain',
										}}
									/>
								)}
								<Text style={styles.item}>{item.title}</Text>
								{item.type === 'bool' && (
									<Pressable style={{ marginLeft: 'auto', marginRight: 10 }}>
										<Text
											onPress={() => {
												item.value = !item.value;
											}}>
											{item.value ? 'On' : 'Off'}
										</Text>
									</Pressable>
								)}
								{item.type === 'route' && (
									<Link
										style={{ marginLeft: 'auto', marginRight: 10 }}
										href={item.route}>
										<Image
											source={require('../../assets/arrow.png')}
											style={{
												width: 20,
												aspectRatio: 1,
												resizeMode: 'contain',
											}}
										/>
									</Link>
								)}
								{item.type === 'text' && (
									<Text style={{ marginLeft: 'auto', marginRight: 10 }}>
										{item.value}
									</Text>
								)}
								{item.type === 'input' && (
									<TextInput
										style={{
											marginLeft: 'auto',
											marginRight: 10,
											backgroundColor: 'white',
											padding: 5,
											width: 150,
											borderRadius: 5,
											borderWidth: 1,
											borderColor: '#ECECEC',
										}}
										value={item.value}
										onChangeText={(text) => {
											item.value = text;
										}}
									/>
									// <Text>Hello</Text>
								)}
							</>
						)}
					</View>
				)}
			/>
		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	listItem: {
		marginTop: 10,
		marginBottom: 10,
		paddingLeft: 20,
		fontFamily: 'Inter !important',
	},
	listTitle: {
		fontSize: 18,
		fontWeight: 'semibold',
		marginBottom: 10,
		color: '#6B7789',
		fontFamily: 'Inter !important',
	},
	listContainer: {
		paddingLeft: 5,
		paddingRight: 15,
	},
	itemContainer: {
		marginBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ECECEC',
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 5,
	},
	item: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingTop: 10,
		paddingBottom: 10,
	},
});

