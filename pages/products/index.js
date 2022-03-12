import { useEffect, useState } from 'react';
import ProductList from '../../components/products/ProductList';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: 'Regular Honey',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/RiverPlateStadium.jpg',
    address: 'Some address',
    description: 'Some description',
  },
  {
    id: 2,
    title: 'Cow Milk',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/RiverPlateStadium.jpg',
    address: 'Some other',
    description: 'Some description about milk',
  },
];

function ProductsPage() {
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    // fetch data from server
    setLoadedProducts(DUMMY_PRODUCTS);
  }, []);

  return (
    <ProductList products={loadedProducts} />
  );
}

export default ProductsPage;
