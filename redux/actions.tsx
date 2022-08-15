export const SET_TOTAL = 'SET_TOTAL';
export const GET_API_RESULT = 'GET_API_RESULT';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_PAY = 'SET_PAY';
export const SET_RECEIVE = 'SET_RECEIVE';
export const SET_NAME = 'SET_NAME';
export const SET_BTC = 'SET_BTC';
export const SET_BNK = ' SET_BNK';
export const SET_ETH = 'SET_ETH';
export const SET_USDP = 'SET_USDP';
export const SET_TOGGLE = 'SET_TOGGLE';

export const getAPIResult = (address: string) => {
  try {
    return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
      const result = await fetch(address, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_API_RESULT,
          payload: json,
        });
      } else {
        console.log('cannot fetch !');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const setTotal =
  (total: number) =>
  (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_TOTAL,
      payload: total,
    });
  };

export const setBTC =
  (btc: any) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_BTC,
      payload: btc,
    });
  };

export const setBNK =
  (bnk: any) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_BNK,
      payload: bnk,
    });
  };

export const setETH =
  (eth: any) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_ETH,
      payload: eth,
    });
  };

export const setUSDP =
  (usdp: any) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_USDP,
      payload: usdp,
    });
  };

export const setName =
  (name: any) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_NAME,
      payload: name,
    });
  };

export const setToggle =
  (toggle: boolean) =>
  (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_TOGGLE,
      payload: toggle,
    });
  };

export const setCurrency =
  (currency: any) =>
  (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_CURRENCY,
      payload: currency,
    });
  };

export const setPay =
  (pay: any) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_PAY,
      payload: pay,
    });
  };

export const setReceive =
  (receive: string | number) =>
  (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_RECEIVE,
      payload: receive,
    });
  };
