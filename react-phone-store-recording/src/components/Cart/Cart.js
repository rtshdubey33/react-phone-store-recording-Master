import React, {Component} from 'react';
import Title from '../Title' ;
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ConsM} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';


/*Now add CartColumns.js to Cart folder
Now add EmptyCart.js to Cart folder
Now add CartTotals to Cart folder
*/
 class Cart extends Component {

render() {
return (
<section>
<ConsM>
{ value => {
	const {cart} = value ;
    if (cart.length>0)
    {
		return(
			<React.Fragment>
			<Title name="your" title="cart" />
			<CartColumns />
			<CartList value={value}/>
			<CartTotals value={value} history={this.props.history} />
			</React.Fragment>
		)
	}
	else {
		return <EmptyCart /> ;
	}
}
}
</ConsM>



</section>

);
}


}
export default Cart;
