function Card({ nft }) {
  return (
    <div className='nft-card'>
      <p className='nft-card__balance'>{nft.balance}</p>
      <h4 className='nft-card__heading'>
        {nft.contract.name} ({nft.contract.symbol})
      </h4>
      <p className='nft-card__address'>{nft.contract.address}</p>
      <p>Token ID: {nft.tokenId}</p>
      <p>Token Type: {nft.tokenType}</p>
    </div>
  );
}

export default Card;
