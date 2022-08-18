import {Dispatch} from 'redux';
import {ICrypto} from './interfaces';
import {AppDispatch} from './store';

export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_PAY = 'SET_PAY';
export const SET_RECEIVE = 'SET_RECEIVE';
export const SET_NAME = 'SET_NAME';
export const SET_ALL_VALUES = 'SET_ALL_VALUES';

export const setAllValues = (allValues: ICrypto) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_ALL_VALUES,
    payload: allValues,
  });
};

export const setName = (name: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: name,
  });
};

export const setCurrency = (currency: any) => (dispatch: AppDispatch) => {
  dispatch({
    type: SET_CURRENCY,
    payload: currency,
  });
};

export const setPay = (pay: any) => (dispatch: AppDispatch) => {
  dispatch({
    type: SET_PAY,
    payload: pay,
  });
};

export const setReceive =
  (receive: string | number) => (dispatch: AppDispatch) => {
    dispatch({
      type: SET_RECEIVE,
      payload: receive,
    });
  };
