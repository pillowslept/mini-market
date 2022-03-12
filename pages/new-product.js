import NewProductForm from '../components/products/NewProductForm';

function NewProductPage() {
  const addProductHandler = (productData) => {
    console.log(productData);
  };

  return (
    <div>
      <NewProductForm onAddProduct={addProductHandler} />
    </div>
  );
};

export default NewProductPage;
