import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {selectCurrency} from '../../images/Icons';
import currencyInfo from './currencyInfo.json';
import {setPay, setName} from '../../redux/actions';
import {useDispatch} from 'react-redux';

const CurrencyCard = (props: any) => {
  const dispatch = useDispatch();

  const info = currencyInfo[props.currency];

  const handlePress = () => {
    dispatch(setPay(props.currency));
    dispatch(setName(info.name));
    props.navigation.navigate('Wallet', {
      price: props.values[props.currency],
      total: props.total,
      crypto: info.funds,
    });
  };

  const balanceInUSD = info.funds / props.values[props.currency];

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.container} {...props.i}>
        <View style={styles.image}>{selectCurrency(props.currency)}</View>
        <View>
          <Text style={styles.title}>{info.name}</Text>
          <Text style={styles.amount}>
            {info.funds}
            <Text> {props.currency} </Text>
          </Text>
          <Text style={styles.fiat}>
            <Text>{balanceInUSD.toFixed(2)}</Text>
            <Text> USD</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#00000026',
    paddingVertical: 10,
  },
  fiat: {color: '#B3B6C6', fontSize: 14},
  amount: {
    color: '#000000',
    fontSize: 14,
  },
  image: {margin: 24},
  title: {
    color: '#102D6F',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default CurrencyCard;
