import React from 'react';
import classes from './buildControls.css'
import BuildControl from './buildControl/buildControl';

const constrols = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},

];

const buildControls = (props) =>
(
    <div className={classes.BuildControls}>
<h4>Total price: {props.totalprice.toFixed(2)}</h4>
{constrols.map(ctrl => (
 <BuildControl
 key={ctrl.label}
 label={ctrl.label}
 added={() => props.ingredientAdded(ctrl.type)}
 remove = {() => props.removeIngredient(ctrl.type)}
 disabled={props.disabled[ctrl.type]}
 />
))}
<button className={classes.OrderButton}
 disabled={!props.purchasable} onClick={props.orderd}
>{props.isAuth?'ORDER NOW':'SIGN UP TO ORDER'}</button>
    </div>

);

export default buildControls;