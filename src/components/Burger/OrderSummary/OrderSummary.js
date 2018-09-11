import React from 'react'

import Aux from '../../../hoc/Aux'


const OrderSummary = (props) => {

    const ingredientSummary =Object.keys(props.ingredients)
.map(igkey => {
    return <li><span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>

});


    return (
        <Aux>
         <h3>Your Order</h3>
<p> A delicious Burger with the following ingredient</p>
<ul>
{ingredientSummary}
</ul>
        </Aux>

    )


}

export default OrderSummary;