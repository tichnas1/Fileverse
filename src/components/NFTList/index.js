import Card from './Card';

function NFTList({ nfts }) {
  return (
    <div>
      <h3>Your NFTs ({nfts.length}):</h3>

      <div className='nft-list'>
        {nfts.map((nft, i) => (
          <Card key={i} nft={nft} />
        ))}
      </div>
    </div>
  );
}

export default NFTList;
