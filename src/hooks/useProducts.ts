import React from 'react';

const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/men's%20clothing",
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
  };
};

export default useProducts;
