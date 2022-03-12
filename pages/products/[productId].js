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
  
  export default ProductDetailPage;
  