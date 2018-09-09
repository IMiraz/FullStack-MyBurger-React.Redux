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
{constrols.map(ctrl => (
 <BuildControl
 key={ctrl.label}
 label={ctrl.label}
 added={() => props.ingredientAdded(ctrl.type)}
 remove = {() => props.removeIngredient(ctrl.type)}
 />
))}

    </div>

);

export default buildControls;