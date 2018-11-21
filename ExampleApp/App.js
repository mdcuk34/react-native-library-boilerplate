/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, NativeModules } from 'react-native';
import RNTest from "react-native-test-lib";

type Props = {};
export default class ExampleApp extends Component<Props> {

	state = {
		nativeResult: "nothing",
		deviceId: "unknown",
		coolFeature: "not cool",
	}

	getNativeResult = async () => {
		this.setState({ nativeResult: "loading..."})
		try {
			const response = await RNTest.getValue()
			this.setState({ nativeResult: response})
		} catch(e) {
			this.setState({ nativeResult: e})
		}
	}

	getDeviceId = async () => {
		this.setState({ deviceId: "loading..."})
		try {
			const { id } = await RNTest.requestDeviceId()
			this.setState({ deviceId: id})
		} catch(e) {
			this.setState({ deviceId: e})
		}
	}

	coolFeature = async () => {
		this.setState({ coolFeature: "loading..."})
		try {
			const response = await RNTest.coolFeature()
			console.log(response)
			this.setState({ coolFeature: response})
		} catch(e) {
			this.setState({ coolFeature: e})
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>From our Native platform: {this.state.nativeResult}</Text>
				<Button
					onPress={this.getNativeResult}
					title="Run Native Code"
					color="#841584"
					accessibilityLabel="Run Native Code Button"
				/>
				<Text style={styles.instructions}>Device id: {this.state.deviceId}</Text>
				<Button
					onPress={this.getDeviceId}
					title="Get Device Id"
					color="#841584"
					accessibilityLabel="Get Device Id Button"
				/>
				<Text style={styles.instructions}>Cool feature: {this.state.coolFeature}</Text>
				<Button
					onPress={this.coolFeature}
					title="Get Device Id"
					color="#841584"
					accessibilityLabel="Get Device Id Button"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
