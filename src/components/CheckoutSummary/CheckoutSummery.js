import React from 'react'
import Burger from '../../components/Burger/Burger'
import Buttton from '../UI/Button/Button'
import classes from './CheckoutSummary.css'

const  checkoutSummary = (props) =>
(
    <div className={classes.CheckoutSummary}>
    <h1>We hope that it testy :) </h1>
     <div style={{width:'300px', height:'300px', margin:'auto'}}>

 <Burger ingredients={props.ingredients}/>
     </div>
<Buttton btnType="Danger" clicked = {props.checkoutCancle}> CANCLE
</Buttton>
<Buttton btnType="Success" clicked={props.checkoutContinue}>
CONTINUE
</Buttton>
    </div>

)
export default checkoutSummary