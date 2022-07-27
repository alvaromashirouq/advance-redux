import { nanoid } from 'nanoid';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: nanoid(),
    title: 'test 1',
    price: 6
  },
  {
    id: nanoid(),
    title: 'test 1',
    price: 6
  },
  {
    id: nanoid(),
    title: 'test 1',
    price: 6
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description="This is a first product - amazing!"
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
