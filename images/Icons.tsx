import React from 'react';
import BNK from '../images/BNK.svg';
import BTC from '../images/BTC.svg';
import ETH from '../images/ETH.svg';
import USDP from '../images/PAX.svg';

const Icons = {BNK, BTC, ETH, USDP};

export const selectCurrency = (currencyName: string) => {
  switch (currencyName) {
    case 'BNK':
      return <Icons.BNK />;
    case 'BTC':
      return <Icons.BTC />;
    case 'ETH':
      return <Icons.ETH />;
    case 'USDP':
      return <Icons.USDP />;
  }
};

export default Icons;
