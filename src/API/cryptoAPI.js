const cryptoApi = async () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=52&page=1&sparkline=false'
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

export default cryptoApi;