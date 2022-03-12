import classes from './ProductDetail.module.css';

function ProductDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        alt={props.title}
        src={props.image}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default ProductDetail;
