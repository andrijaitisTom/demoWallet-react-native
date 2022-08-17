import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputField from '../InputField/InputField';
import Convert from '../../images/Convert.svg';
import Illustration from '../../images/ConvertIllustration.svg';
import {useDispatch, useSelector} from 'react-redux';
import {setReceive} from '../../redux/actions';
import {selectCurrency} from '../../images/Icons';
import USD from '../../images/USD.svg';

interface Props {
  price: number;
  total: number;
  crypto: number;
}

const WalletLayout = (props: Props) => {
  const dispatch = useDispatch();
  const {pay, name} = useSelector(state => state.useReducer);
  const [isPay, setIsPay] = useState(true);
  useEffect(() => {
    dispatch(setReceive(0)); // cleans input values on entering wallet
  }, []);

  const handlePressConvert = () => {
    setIsPay(!isPay);
    dispatch(setReceive(0));
  };

  const [toggle, setToggle] = useState(true);

  return (
    <View style={[styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={{flex: 1}}></View>
      <View style={styles.third}>
        <Illustration style={styles.illustration} />

        {toggle ? (
          <>
            <InputField
              label="Pay amount"
              currencyLogo={selectCurrency(pay)}
              payField={pay}
              price={props.price}
              total={props.total}
              crypto={props.crypto}
            />
            <TouchableOpacity onPress={() => handlePressConvert()}>
              <Convert onPress={() => setToggle(!toggle)} />
            </TouchableOpacity>
            <InputField
              label="Receive amount"
              currencyLogo={<USD />}
              payField="USD"
              price={props.price}
              total={props.total}
              crypto={props.crypto}
            />
          </>
        ) : (
          <>
            <InputField
              label="Pay amount"
              currencyLogo={<USD />}
              payField="USD"
              price={props.price}
              total={props.total}
              crypto={props.crypto}
            />
            <TouchableOpacity onPress={() => handlePressConvert()}>
              <Convert onPress={() => setToggle(!toggle)} />
            </TouchableOpacity>

            <InputField
              label="Receive amount"
              currencyLogo={selectCurrency(pay)}
              payField={pay}
              price={props.price}
              total={props.total}
              crypto={props.crypto}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    flexDirection: 'column',
  },
  title: {
    color: '#102D6F',
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    top: 2,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  illustration: {
    position: 'absolute',
    top: -50,
    zIndex: 2,
  },
  third: {
    paddingTop: 100,
    zIndex: 1,
    position: 'relative',
    flex: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default WalletLayout;
