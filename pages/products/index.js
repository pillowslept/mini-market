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

function ProductsPage(props) {
  return (
    <ProductList products={props.products} />
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: DUMMY_PRODUCTS,
    },
  };
}

export default ProductsPage;
