import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{ ...item, title: item.name, total: item.totalPrice }}
            />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
