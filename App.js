/* eslint-disable import/no-anonymous-default-export */

// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

import Homescreen from './assets/js/home/homescreen'
import { default as theme } from './theme.json'

const App = () => {
	return (
		<View style={styles.container}>
			{/* <StatusBar style='auto' /> */}
			<Homescreen />
		</View>
	)
}

export default () => (
	<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
		<App />
	</ApplicationProvider>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: '10%',
		marginHorizontal: '10%',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
})
