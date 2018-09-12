import React from 'react'

import Button from '../../UI/Button/Button'
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
<Button btnType="Danger" clicked={props.purchaseCancle}>CANCEL</Button>
<Button btnType="Success" clicked={props.purchaseContinue}>Continure</Button>
        </Aux>

    )


}

export default OrderSummary;