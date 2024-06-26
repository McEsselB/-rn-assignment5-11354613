// components/Card.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../styles/colors';
import useTheme from '../hooks/useTheme';

const Card = () => {
  const { theme } = useTheme();
  const colors = theme === 'light' ? lightColors : darkColors;

  return (
    <View style={[styles.card, { backgroundColor: colors.cardBackground }]}>
      <Text style={[styles.cardNumber, { color: colors.text }]}>4562 1122 4595 7852</Text>
      <View style={styles.cardDetails}>
        <View>
          <Text style={[styles.cardLabel, { color: colors.text }]}>Expiry Date</Text>
          <Text style={[styles.cardInfo, { color: colors.text }]}>24/2000</Text>
        </View>
        <View>
          <Text style={[styles.cardLabel, { color: colors.text }]}>CVV</Text>
          <Text style={[styles.cardInfo, { color: colors.text }]}>6986</Text>
        </View>
      </View>
      <Text style={[styles.cardHolder, { color: colors.text }]}>AR Jonson</Text>
      <Text style={[styles.cardType, { color: colors.text }]}>Mastercard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 12,
    color: 'gray',
  },
  cardInfo: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardHolder: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardType: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Card;
