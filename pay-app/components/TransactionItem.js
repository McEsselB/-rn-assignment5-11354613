import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import useTheme from '../hooks/useTheme';
import { lightColors, darkColors } from '../styles/colors';

const TransactionItem = ({ transaction }) => {
  const { theme } = useTheme();
  const colors = theme === 'light' ? lightColors : darkColors;

  // Check if amount starts with '- $' to apply red color
  const isNotNegativeAmount = transaction.amount.startsWith('$');

  return (
    <View style={[styles.container]}>
      <Image source={transaction.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={[styles.name, { color: colors.text }]}>{transaction.name}</Text>
        <Text style={[styles.category, { color: colors.text }]}>{transaction.category}</Text>
      </View>
      <Text style={[styles.amount, { color: isNotNegativeAmount ? 'blue' : colors.text }]}>
        {transaction.amount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  image: {
    width: 40, 
    height: 40, 
    borderRadius: 20,
    marginRight: 16,
  },
  details: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 12,
    color: 'gray', // Consider using colors.text here
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionItem;
