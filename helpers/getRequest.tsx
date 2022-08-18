import axios from 'axios';
import {setAllValues} from '../redux/actions';
import endpoints from './endpoints';

const getRequests = async (dispatch: any) => {
  Promise.all(endpoints.map(endpoint => axios.get(endpoint))).then(
    ([{data: BTC}, {data: ETH}, {data: USDP}, {data: BNK}]) => {
      dispatch(
        setAllValues({
          BNK: BNK.last,
          BTC: BTC.last,
          ETH: ETH.last,
          USDP: USDP.last,
        }),
      );
    },
  );
};

export default getRequests;
