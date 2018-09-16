import React from 'react'
import classes from './Order.css'

const order = (props) =>{
console.log(props.ingredients)

    const ingredients = [];
    for(let ingredientName in props.ingredients)
    {
ingredients.push( {
name:ingredientName,
amount:props.ingredients[ingredientName]
}
)
    }

    const IngredientOutput = ingredients.map(ig => {
        return <span
style={{
textTransform:'capitalize',
display:'inline-block',
margin:'0 8px',
border:'1px solid #ccc',
padding:'5px'
}}
        key={ig.name}>{ig.name} ({ig.amount})</span>

    })

    return (
        <div className="">
         <div className={classes.Order}>
        <p>Ingredients : {IngredientOutput}</p>
        <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
        </div>
    )


}

export default order