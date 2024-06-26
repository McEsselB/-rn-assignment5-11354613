// HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TransactionItem from '../components/TransactionItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useTheme from '../hooks/useTheme';
import { lightColors, darkColors } from '../styles/colors';

const profileImage = require('../assets/images/user.png');
const masterCard = require('../assets/images/mastercard.png');
const appleImage = require('../assets/images/apple-store.png');
const moneyTransferImage = require('../assets/images/money-transfer.png');
const transactions = [
  { id: '1', image: appleImage, name: 'Apple Store', category: 'Entertainment', amount: '- $5.99' },
  { id: '2', image: require('../assets/images/spotify.png'), name: 'Spotify', category: 'Music', amount: '- $12.99' },
  { id: '3', image: moneyTransferImage, name: 'Money Transfer', category: 'Transaction', amount: '$300' },
  { id: '4', image: require('../assets/images/grocery.png'), name: 'Grocery', category: 'Shopping', amount: '- $88' },
];

const actions = [
  { id: '1', image: require('../assets/images/send.png'), name: 'Sent' },
  { id: '2', image: require('../assets/images/recieve.png'), name: 'Receive' },
  { id: '3', image: require('../assets/images/loan.png'), name: 'Loan' },
  { id: '4', image: require('../assets/images/topUp.png'), name: 'Topup' },
];
  
const HomeScreen = () => {
  const { theme } = useTheme();
  const colors = theme === 'light' ? lightColors : darkColors;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={profileImage}
            style={styles.profileImage}
          />
          <View>
            <Text style={[styles.welcomeText, { color: colors.text }]}>Welcome back,</Text>
            <Text style={[styles.nameText, { color: colors.text }]}>Eric Atsu</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.searchIconContainer, { backgroundColor: colors.tabBarBackground }]}>
          <Icon name="search" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={masterCard}
          style={styles.masterCard}
        />
      </View>
      <View style={styles.actionContainer}>
        {actions.map(action => (
          <TouchableOpacity key={action.id} style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <Image source={action.image} style={{ width: 23, height: 23 }} />
            </View>
            <Text style={[styles.actionText, { color: colors.text }]}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.transactionHeader}>
        <Text style={[styles.transactionTitle, { color: colors.text }]}>Transaction</Text>
        <TouchableOpacity>
          <Text style={[styles.sellAllText, { color: colors.primary }]}>Sell All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        keyExtractor={(item) => item.id}
        style={styles.transactionList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: 'grey',
    fontSize: 14,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f0f0f0', // Remove background color here
  },
  masterCard: {
    width: 380,
    height: 220,
    borderRadius: 30,
    marginBottom: 4,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Adjust based on your theme colors
    marginBottom: 4,
  },
  actionText: {
    fontSize: 12,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sellAllText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  transactionList: {
    marginTop: 8,
  },
});

export default HomeScreen;
