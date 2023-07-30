const BeerFetch = (pageNum) => {
  const getData = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");

    return res.json();
  };

  const getBeers = async () => {
    const beers = "https://api.punkapi.com/v2/beers";
    const results = [];
    let page = pageNum;

    const url = `${beers}?&page=${page}`;
    const newResponse = await getData(url);
    results.push(...newResponse);

    return results;
  };

  const fetchData = async () => {
    try {
      const results = await getBeers();
      return results;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return fetchData();
};

export default BeerFetch;
