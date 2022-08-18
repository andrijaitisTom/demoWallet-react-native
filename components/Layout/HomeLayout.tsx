import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icons from '../../images/Icons';
import USD from '../../images/USD.svg';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import {useDispatch, useSelector} from 'react-redux';
import currencyInfo from '../CurrencyCard/currencyInfo.json';
import {NavigationAction} from 'react-navigation';
import getRequests from '../../helpers/getRequest';

interface Props {
  navigation: NavigationAction;
}

const HomeLayout = (props: Props) => {
  const {allValues} = useSelector(state => state.useReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getRequests(dispatch);
  }, [dispatch]);

  let totalValue = 0;

  const countTotal = () => {
    Object.keys(currencyInfo).map((key, i) => {
      const funds = currencyInfo[key].funds;
      const price = allValues[key];
      const valueInUSD = funds / price;
      totalValue += valueInUSD;
    });
    return totalValue;
  };
  const split = countTotal().toString();
  const fullNumber = split.split('.')[0];
  const decimal = split.split('.')[1];

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.totalTitle}>Total</Text>
        <View style={styles.total}>
          {decimal === undefined ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <USD style={styles.image} />
              <Text style={styles.text}>
                <Text style={styles.full}>{fullNumber}</Text>
                <Text style={styles.decimal}>
                  {` .${decimal.substring(0, 2)}`}{' '}
                </Text>
                <Text style={styles.currency}>USD</Text>
              </Text>
            </>
          )}
        </View>
      </View>
      <View style={styles.second}>
        <Text style={styles.wallets}>Wallets</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.third}>
          {Object.keys(Icons).map((item, i) => (
            <CurrencyCard
              currency={item}
              key={i}
              navigation={props.navigation}
              values={allValues}
              total={fullNumber}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    padding: 7,
    justifyContent: 'space-between',
  },
  totalTitle: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  image: {
    marginHorizontal: 9,
  },
  full: {fontSize: 32},
  decimal: {fontSize: 20},
  currency: {fontSize: 16},
  text: {color: '#102D6F'},
  wallets: {
    display: 'flex',
    color: '#000000',
    fontSize: 16,
    marginBottom: 22,
    fontWeight: '600',
  },
  first: {
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  second: {
    flex: 3,
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  third: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
});

export default HomeLayout;
