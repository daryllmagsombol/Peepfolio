import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Card, Text, Button } from '@ui-kitten/components'

const Homescreen = () => {
	const [stocks, setStocks] = useState([
		{
			symbol: 'MBT',
			price: { amount: 49.5 },
			percent_change: 10.01,
		},
		{
			symbol: 'CEB',
			price: { amount: 39.05 },
			percent_change: 0,
		},
		{
			symbol: 'LTG',
			price: { amount: 18 },
			percent_change: -160.99,
		},
	])
	// useEffect(() => {
	// 	axios.get('http://phisix-api4.appspot.com/stocks.json').then((result) => {
	// 		let data = result.data.stock

	// 		setStocks(data)
	// 	})
	// })

	const renderStockCards = () => {
		console.log('result', stocks)
		return stocks.map((stock) => {
			let percent = stock.percent_change
			return (
				<Card key={stock.symbol} style={styles.stock_port_card}>
					<View style={styles.stock_port_detail}>
						<View>
							<Text style={{ fontWeight: 'bold' }}>{stock.symbol}</Text>
							<Text style={{ color: '#93979a' }}>{stock.price.amount}</Text>
						</View>

						<View style={{ justifyContent: 'center' }}>
							<Text>100.00</Text>
						</View>
						<Button
							style={{
								transform: [{ scale: 0.7 }],
								paddingHorizontal: 0,
								paddingVertical: 0,
								marginLeft: 'auto',
								borderRadius: 30,
								width: 110,
								height: 20,
							}}
							status={
								percent < 0 ? 'danger' : percent > 0 ? 'success' : 'basic'
							}
						>
							<Text
								style={{
									fontWeight: 'bold',
									color: stock.percent_change === 0 ? '#8e9bb3' : 'white',
									fontSize: 18,
								}}
							>
								{stock.percent_change}%
							</Text>
						</Button>
					</View>
				</Card>
			)
		})
	}

	return (
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
}

const styles = StyleSheet.create({
	card_port: {
		marginTop: '10%',
		paddingVertical: '4%',
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
		fontSize: 14,
	},

	currency_text: {
		fontSize: 32,
		color: 'white',
	},
	amount_text: {
		fontSize: 39,
		color: 'white',
	},
	percent_text: {
		marginTop: '3%',
		color: 'white',
	},

	stock_port: {
		marginTop: '5%',
		marginBottom: '75%',
		marginHorizontal: '1%',
	},
	stock_port_card: {
		marginVertical: '2.1%',
		shadowColor: '#000',
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 1.5,
		// height: '7%',
	},
	stock_port_detail: {
		paddingVertical: '3%',
		marginHorizontal: '-5%',
		flexDirection: 'row',
		// flexWrap: 'nowrap',
	},
})

export default Homescreen
