import {
  SET_CURRENCY,
  SET_PAY,
  SET_RECEIVE,
  SET_NAME,
  SET_ALL_VALUES,
} from './actions';

const initialState = {
  apiResult: [],
  currency: {btc: ''},
  pay: null,
  receive: null,
  name: '',
  allValues: {
    BTC: '',
    BNK: '',
    ETH: '',
    USDP: '',
  },
};

function useReducer(state = initialState, action: {type: any; payload: any}) {
  switch (action.type) {
    case SET_CURRENCY:
      return {...state, currency: action.payload};
    case SET_PAY:
      return {...state, pay: action.payload};
    case SET_RECEIVE:
      return {...state, receive: action.payload};
    case SET_NAME:
      return {...state, name: action.payload};
    case SET_ALL_VALUES:
      return {...state, allValues: action.payload};

    default:
      return state;
  }
}

export default useReducer;
