import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, Text } from '@ui-kitten/components'

const renderStockCards = () => {
	let cards = []

	for (let i = 0; i < 20; i++) {
		let randomStatus = Math.random() < 0.5
		cards.push(
			<Card
				style={styles.stock_port_card}
				status={randomStatus ? 'success' : 'danger'}
			>
				<View style={styles.stock_port_detail}>
					<Text>AAA - SAMPLE STOCK {i + 1}</Text>
				</View>
			</Card>
		)
	}

	return cards
}

const Homescreen = () => (
	<View>
		<Card style={styles.card_port}>
			<Text style={styles.market_text}>Market Value</Text>
			<Text>
				<Text style={styles.currency_text}>₱</Text>
				<Text style={styles.amount_text}>100000.00</Text>
			</Text>
			<Text style={styles.percent_text}>6.6%</Text>
		</Card>
		<ScrollView style={styles.stock_port}>{renderStockCards()}</ScrollView>
	</View>
)

const styles = StyleSheet.create({
	card_port: {
		marginTop: '15%',
		paddingVertical: '5%',
		backgroundColor: '#79B0FA',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
	market_text: {
		color: 'white',
		fontSize: 17,
	},

	currency_text: {
		fontSize: 34,
		color: 'white',
	},
	amount_text: {
		fontSize: 43,
		color: 'white',
	},
	percent_text: {
		marginTop: '6%',
		color: 'white',
	},

	stock_port: {
		marginTop: '10%',
		marginBottom: '75%',
		marginHorizontal: '2%',
	},
	stock_port_card: {
		marginVertical: '3%',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 1.5,
		// height: '7%',
	},
	stock_port_detail: {
		paddingVertical: '7%',
	},
})

export default Homescreen
