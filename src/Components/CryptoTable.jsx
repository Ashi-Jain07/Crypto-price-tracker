import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAssets, updateAssetData } from '../Utils/cryptoSlice.js';
import './CryptoTable.css';

const getRandomChange = () => (Math.random() * 4 - 2).toFixed(2);

const CryptoTable = () => {
  const assets = useSelector(selectAssets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.ceil(Math.random() * assets.length);
      const changes = {
        price: +(assets.find(a => a.id === id).price + parseFloat(getRandomChange())).toFixed(2),
        change1h: +getRandomChange(),
        change24h: +getRandomChange(),
        volume24h: `${(Math.random() * 50).toFixed(1)}B`,
      };
      dispatch(updateAssetData({ id, changes }));
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch, assets]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td><img src={asset.logo} alt={asset.symbol} width={30} /></td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.price.toLocaleString()}</td>
              <td className={asset.change1h >= 0 ? 'positive' : 'negative'}>{asset.change1h}%</td>
              <td className={asset.change24h >= 0 ? 'positive' : 'negative'}>{asset.change24h}%</td>
              <td className={asset.change7d >= 0 ? 'positive' : 'negative'}>{asset.change7d}%</td>
              <td>{asset.marketCap}</td>
              <td>{asset.volume24h}</td>
              <td>{asset.supply}</td>
              <td>{asset.maxSupply}</td>
              <td><img src={asset.chart} alt="7d" height={100} width={150} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;