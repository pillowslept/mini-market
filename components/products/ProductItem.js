import { useRouter } from 'next/router';
import Image from 'next/image';

import Card from '../ui/Card';
import classes from './ProductItem.module.css';

function ProductItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/products/${'some-product-id'}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            alt={props.title}
            layout='fill'
            src={props.image}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
