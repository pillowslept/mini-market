import ProductList from '../../components/products/ProductList';

const DUMMY_PRODUCTS = [
  {
    id: 'product1',
    title: 'Regular Honey',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/RiverPlateStadium.jpg',
    address: 'Some address',
    description: 'Some description',
  },
  {
    id: 'product2',
    title: 'Cow Milk',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/RiverPlateStadium.jpg',
    address: 'Some other',
    description: 'Some description about milk',
  },
];

function ProductsPage(props) {
  return (
    <ProductList products={props.products} />
  );
}

export async function getStaticProps() {
  // fetch data from an API

  return {
    props: {
      products: DUMMY_PRODUCTS,
      revalidate: 10,
    },
  };
}

export default ProductsPage;
