/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import WalletLayout from '../components/Layout/WalletLayout';
import {NavigationRoute} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
});

interface Params {
  price: number;
  total: number;
  crypto: number;
}

const WalletScreen = ({route}: NavigationRoute) => {
  const {price, total, crypto}: Params = route.params;
  return (
    <View style={styles.container}>
      <WalletLayout price={price} total={total} crypto={crypto} />
    </View>
  );
};

export default WalletScreen;
