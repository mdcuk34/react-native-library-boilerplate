/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import RNTest from "react-native-test-lib";

type Props = {};
export default class ExampleApp extends Component<Props> {

	state = {
		nativeResult: "nothing"
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
