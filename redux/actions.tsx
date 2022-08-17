export const SET_TOTAL = 'SET_TOTAL';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_PAY = 'SET_PAY';
export const SET_RECEIVE = 'SET_RECEIVE';
export const SET_NAME = 'SET_NAME';
export const SET_ALL_VALUES = 'SET_ALL_VALUES';

export const setTotal =
  (total: number) =>
  (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_TOTAL,
      payload: total,
    });
  };

export const setAllValues =
  (allValues: number) =>
  (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_ALL_VALUES,
      payload: allValues,
    });
  };

export const setName =
  (name: any) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_NAME,
      payload: name,
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
