const cryptoApi = async () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=56&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y'
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

export default cryptoApi;