import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icons from '../../images/Icons';
import USD from '../../images/USD.svg';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import {setBTC, setBNK, setETH, setUSDP} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import currencyInfo from '../CurrencyCard/currencyInfo.json';
import {NavigationAction} from 'react-navigation';

interface Props {
  navigation: NavigationAction;
}

const HomeLayout = (props: Props) => {
  const {btc, eth, bnk, usdp} = useSelector(state => state.useReducer);
  const dispatch = useDispatch();

  const [allValues, setAllValues] = useState({
    BTC: '',
    BNK: '',
    ETH: '',
    USDP: '',
  });

  async function getData(label: string) {
    try {
      let res = await axios({
        url: `https://spectrocoin.com/scapi/ticker/${label}/USD`,
        method: 'get',
        timeout: 8000,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status == 200) {
        console.log(res.status);
      }
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData('BTC').then(res => dispatch(setBTC(res.last)));
    getData('BNK').then(res => dispatch(setBNK(res.last)));
    getData('ETH').then(res => dispatch(setETH(res.last)));
    getData('USDP').then(res => dispatch(setUSDP(res.last)));
    setAllValues({
      BNK: bnk,
      BTC: btc,
      ETH: eth,
      USDP: usdp,
    });
  }, [bnk, btc, dispatch, eth, usdp]);

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
  // countTotal();
  const split = countTotal().toString();
  const fullNumber = split.split('.')[0];
  const decimal = split.split('.')[1];

  return (
    <View style={[styles.container]}>
      <View style={styles.first}>
        <Text style={styles.totalTitle}>Total</Text>
        <View style={styles.total}>
          <USD style={styles.image} />
          <Text style={styles.text}>
            <Text style={styles.full}>{fullNumber}</Text>
            <Text style={styles.decimal}>{` .${decimal}`} </Text>
            <Text style={styles.currency}>USD</Text>
          </Text>
        </View>
      </View>
      <View style={styles.second}>
        <Text style={styles.wallets}>Wallets</Text>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 7,
    flexDirection: 'column',
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
  first: {flex: 1, justifyContent: 'center'},
  second: {flex: 1, justifyContent: 'flex-end'},
  third: {
    flex: 3,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
  },
});

export default HomeLayout;
