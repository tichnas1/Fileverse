import useWallet from '../../hooks/useWallet';
import Button from '../Button';

function WalletData() {
  const [connectWallet, { data, loading }] = useWallet();

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
    </div>
  );
}

export default WalletData;
