
// definition Coin 
function Coin({ icon, price, symbol, id, priceBtc, priceChange1h, priceChange1d, priceChange1w, rank, websiteUrl }) {
      //affichage de Coin dans un tableau return
      return (
            <table className='coin'>
                  <thead>
                        <th>
                              <strong><p>№ {rank}</p></strong>
                              <h2>{id}</h2>
                              <img alt="logo de la crypto" src={icon} />
                        </th>
                  </thead>
                  <tbody>
                        <th>
                              Site web: <a href={websiteUrl}>{websiteUrl}</a>
                        </th>
                        <tr>
                              <strong><p>1 {symbol} = {price} $</p></strong>
                              <strong><p>1 {symbol} = {priceBtc} BTC</p></strong>
                        </tr>
                  </tbody>
                  <tfoot>
                        <th>
                              <p>{priceChange1h}%  1h</p>
                              <p>{priceChange1d}% 24h</p>
                              <p>{priceChange1w}% 7d</p>
                        </th>
                  </tfoot>
            </table>
      )
};


export default Coin;



