import { useState } from 'react';
import { ethers } from 'ethers';

function useWallet() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const connectWallet = async () => {
    setLoading(true);

    if (window.ethereum) {
      const res = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const address = res[0];

      const rawBalance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      });
      const balance = ethers.utils.formatEther(rawBalance);

      setData({ address, balance });
    } else {
      window.alert('Metamark extension not installed');
    }

    setLoading(false);
  };

  return [connectWallet, { data, loading }];
}

export default useWallet;
