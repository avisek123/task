import React from 'react';

const useTopTrendingProducts = () => {
  const [topTrending, setTopTrending] = React.useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products?limit=10&category=mens',
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      setTopTrending(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  React.useEffect(() => {
    fetchProducts();
  }, []);

  return {
    topTrending,
  };
};

export default useTopTrendingProducts;
