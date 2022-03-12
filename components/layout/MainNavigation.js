import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Products</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/products'>All Products</Link>
          </li>
          <li>
            <Link href='/new-product'>Add New Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
