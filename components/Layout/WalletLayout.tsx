import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
    const {height, width} = Dimensions.get('window');
    height > width ? setIsPortrait(true) : setIsPortrait(false); //set state on load
    const subscription = Dimensions.addEventListener('change', ({screen}) => {
      screen.height > screen.width ? setIsPortrait(true) : setIsPortrait(false); //set state on change
    });
    return () => subscription?.remove();
  }, []);
  useEffect(() => {
    const backAction = () => {};
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const [isPortrait, setIsPortrait] = useState(false);

  const [toggle, setToggle] = useState(true);

  const handlePressConvert = () => {
    setIsPay(!isPay);
    dispatch(setReceive(0));
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={{flex: 1}}></View>
      <View style={styles.third}>
        <Illustration style={styles.illustration} />

        {toggle ? (
          <View
            style={[
              styles.Inputcontainer,
              isPortrait ? styles.Inputcontainer : styles.rowView,
            ]}>
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
          </View>
        ) : (
          <View
            style={[
              styles.Inputcontainer,
              isPortrait ? styles.Inputcontainer : styles.rowView,
            ]}>
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
          </View>
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
  Inputcontainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
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
  rowView: {
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
  },
});

export default WalletLayout;
