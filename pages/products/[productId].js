import ProductDetail from '../../components/products/ProductDetail';

function ProductDetailPage() {
  return (
    <ProductDetail
      address="Some street"
      description="The product description"
      image="https://upload.wikimedia.org/wikipedia/commons/5/54/RiverPlateStadium.jpg"
      title="My first product"
    />
  );
}


export async function getStaticPaths() {
  // fetch data for product ids

  return {
    fallback: false,
    paths: [
      {
        params: {
          productId: 'product1',
        }
      },
      {
        params: {
          productId: 'product2',
        }
      },
    ],
  };
}

export async function getStaticProps(contex) {
  // fetch data for a single product

  const productId = contex.params.productId;

  return {
    props: {
      product: {
        address: 'Some street',
        description: 'The product description',
        id: productId,
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/RiverPlateStadium.jpg',
        title: 'My first product',
      }
    },
  };
}

export default ProductDetailPage;
