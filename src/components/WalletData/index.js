import { useEffect, useRef, useState } from 'react';
import { Alchemy } from 'alchemy-sdk';
import { toast } from 'react-toastify';

import { alchemySettins } from '../../constants';
import useWallet from '../../hooks/useWallet';
import Button from '../Button';
import NFTList from '../NFTList';
import Loading from '../Loading';

function WalletData() {
  // TODO: Alchemy SDK uses private API key, so build a server to serve frontend instead of direct Alchemy SDK query
  const alchemy = useRef(new Alchemy(alchemySettins));
  const [connectWallet, { data, loading }] = useWallet();

  const [nftLoading, setNftLoading] = useState(false);
  const [nfts, setNfts] = useState();

  const getNfts = async () => {
    setNftLoading(true);

    try {
      const nftsForOwner = await alchemy.current.nft.getNftsForOwner(
        data.address
      );
      setNfts(nftsForOwner.ownedNfts);
    } catch (err) {
      console.error(err.message);
      toast.error('Error getting NFTs');
    }

    setNftLoading(false);
  };

  useEffect(() => {
    if (data && data.address) getNfts();
  }, [data]);

  if (!data)
    return (
      <Button
        text='Connect Wallet'
        onClick={connectWallet}
        disabled={loading}
      />
    );

  return (
    <div>
      <p>Your account address: {data.address}</p>
      <p>Balance: {data.balance}</p>

      {nftLoading && <Loading />}
      {nfts && <NFTList nfts={nfts} />}
    </div>
  );
}

export default WalletData;
