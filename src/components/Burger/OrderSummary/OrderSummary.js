import React from 'react'

import Aux from '../../../hoc/Aux'


const OrderSummary = (props) => {

    const ingredientSummary =Object.keys(props.ingredients)
.map(igkey => {
    return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>

});


    return (
        <Aux>
         <h3>Your Order</h3>
<p> A delicious Burger with the following ingredient</p>
<ul>
{ingredientSummary}
</ul>
<p>Continure To Checkout ?</p>
<button>Cancel</button>
<button>Continue</button>
        </Aux>

    )


}

export default OrderSummary;