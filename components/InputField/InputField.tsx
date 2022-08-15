import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrency} from '../../images/Icons';
import USD from '../../images/USD.svg';
import {setToggle, setReceive} from '../../redux/actions';

const InputField = props => {
  const dispatch = useDispatch();
  const {toggle, receive, total} = useSelector(state => state.useReducer);

  useEffect(() => {
    const backAction = () => {
      dispatch(setReceive(0)); // cleans input values on clicking back
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View>
      {props.isPay ? (
        <View>
          <Text style={styles.label}>Pay amount</Text>
          <View style={styles.container}>
            <View style={styles.icon}>{selectCurrency(props.payField)}</View>
            {toggle ? (
              <TouchableOpacity
                style={styles.input}
                onPress={() => dispatch(setToggle(!toggle))}>
                <Text>{receive * props.price}</Text>
              </TouchableOpacity>
            ) : (
              <TextInput
                style={styles.input}
                placeholder="Enter amount to convert"
                onChangeText={value => dispatch(setReceive(value))}
                keyboardType="numeric"
                placeholderTextColor="#B3B6C6"
              />
            )}

            <Text style={styles.currency}>{props.payField}</Text>
          </View>
          {receive > props.crypto && !toggle ? (
            <Text style={styles.warning}>Not Enougn {props.payField}</Text>
          ) : null}
        </View>
      ) : (
        <View>
          <Text style={styles.label}>Receive amount</Text>
          <View style={styles.container}>
            <View style={styles.icon}>
              <USD />
            </View>
            {toggle ? (
              <TextInput
                style={styles.input}
                placeholder="Enter amount to convert"
                onChangeText={value => dispatch(setReceive(value))}
                keyboardType="numeric"
                placeholderTextColor="#B3B6C6"
              />
            ) : (
              <TouchableOpacity
                style={styles.input}
                onPress={() => dispatch(setToggle(!toggle))}>
                <Text>{receive / props.price}</Text>
              </TouchableOpacity>
            )}
            <Text style={styles.currency}>USD</Text>
          </View>
          {receive > parseInt(props.total) && toggle ? (
            <Text style={styles.warning}>Not Enougn USD</Text>
          ) : null}
        </View>
      )}
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
