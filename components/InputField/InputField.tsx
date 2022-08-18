import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Svg from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {onlyNumbersAndDot} from '../../helpers/helpers';
import {setReceive} from '../../redux/actions';

interface Props {
  crypto: number;
  currencyLogo: Svg;
  label: string;
  payField: string;
  price: number;
  total: number;
}

const InputField = (props: Props) => {
  const dispatch = useDispatch();
  const {receive} = useSelector(state => state.useReducer);
  const [focusedOn, setFocusedOn] = useState(null);

  const onChanged = (value: string) => {
    dispatch(setReceive(onlyNumbersAndDot(value)));
  };

  const chooseValue = () => {
    if (focusedOn) {
      return receive;
    } else if (!focusedOn) {
      if (props.payField !== 'USD') {
        const value = receive * props.price;
        return value.toString();
      }
      if (props.payField === 'USD') {
        const value = receive / props.price;
        const formattedValue = (Math.round(value * 100) / 100).toFixed(2);
        return formattedValue.toString();
      }
    }
  };

  console.log(props.label);

  const ErrorMessage = () => {
    const crypto = Number(props.crypto);
    const total = Number(props.total);
    const inputValue = Number(receive);
    if (
      props.label === 'Pay amount' &&
      props.payField !== 'USD' &&
      crypto < inputValue
    ) {
      return (
        <Text style={styles.warning}>
          Not Enougn {props.payField} in balance
        </Text>
      );
    }
    if (
      props.label === 'Pay amount' &&
      props.payField === 'USD' &&
      total < inputValue
    ) {
      return <Text style={styles.warning}>Not Enougn USD in balance</Text>;
    }
    return null;
  };

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.container}>
        <View style={styles.icon}>{props.currencyLogo}</View>
        <TextInput
          style={styles.input}
          placeholder="Enter amount to convert"
          onChangeText={value => onChanged(value)}
          keyboardType="numeric"
          placeholderTextColor="#B3B6C6"
          value={receive === 0 ? null : chooseValue()}
          onFocus={() => setFocusedOn(true)}
          onBlur={() => setFocusedOn(false)}
        />
        <Text style={styles.currency}>{props.payField}</Text>
      </View>
      <ErrorMessage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#D9DBE5',
    height: 52,
    borderRadius: 5,
    width: 296,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
  },
  warning: {
    color: 'red',
  },
  icon: {
    marginHorizontal: 16,
    transform: [{scale: 0.7}],
  },
  currency: {
    marginHorizontal: 10,
    color: '#B3B6C6',
  },
  label: {
    color: '#102D6F',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontFamily: 'Red Hat Text, Medium',
    fontSize: 12,
  },
});

export default InputField;
