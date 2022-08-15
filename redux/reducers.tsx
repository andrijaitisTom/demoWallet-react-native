import {
  SET_TOTAL,
  GET_API_RESULT,
  SET_CURRENCY,
  SET_PAY,
  SET_RECEIVE,
  SET_NAME,
  SET_BTC,
  SET_BNK,
  SET_ETH,
  SET_USDP,
  SET_TOGGLE,
} from './actions';

const initialState = {
  total: '',
  apiResult: [],
  currency: {btc: ''},
  pay: null,
  receive: null,
  name: '',
  btc: null,
  bnk: null,
  eth: null,
  usdp: null,
  toggle: false,
};

function useReducer(state = initialState, action: {type: any; payload: any}) {
  switch (action.type) {
    case SET_TOTAL:
      return {...state, total: action.payload};
    case GET_API_RESULT:
      return {...state, apiResult: action.payload};
    case SET_CURRENCY:
      return {...state, currency: action.payload};
    case SET_PAY:
      return {...state, pay: action.payload};
    case SET_RECEIVE:
      return {...state, receive: action.payload};
    case SET_NAME:
      return {...state, name: action.payload};
    case SET_BTC:
      return {...state, btc: action.payload};
    case SET_BNK:
      return {...state, bnk: action.payload};
    case SET_ETH:
      return {...state, eth: action.payload};
    case SET_USDP:
      return {...state, usdp: action.payload};
    case SET_TOGGLE:
      return {...state, toggle: action.payload};
    default:
      return state;
  }
}

export default useReducer;
