/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationAction} from 'react-navigation';
import HomeLayout from '../components/Layout/HomeLayout';

interface WalletProps {
  navigation: NavigationAction;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
});

const HomeScreen = ({navigation}: WalletProps) => {
  return (
    <View style={styles.container}>
      <HomeLayout navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
