import React, {Component} from 'react'
import axios from '../../axios-orders'

import Aux from '../../hoc/Aux'
import Burger from  '../../components/Burger/Burger'
import BuildControls  from '../../components/Burger/buildControls/buildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary  from '../../components/Burger/OrderSummary/OrderSummary'
import Spineer from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'


const INGREDIENT_PRICE = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component
{
    state = {
        ingredients:null,
        totalPrice:4,
        purchasable:false,
        purchase:false,
        loading:false
    }

componentDidMount() {
axios.get('https://react-myburger-miraz.firebaseio.com/ingredients.json')
.then(response =>
    {
        this.setState({ingredients:response.data})
        // this.setState({ingredients:res.data})
    })
;

}


updatePurchaseState(ingredients) {

   const sum = Object.keys(ingredients)
    .map(igkey =>
        {
      return ingredients[igkey];
     })

.reduce((sum, el) => {
 return sum + el;
}, 0);
this.setState({purchasable:sum >0});

    }
addIngredientHandler =(type) => {
const oldCount = this.state.ingredients[type];
const  updatedCount = oldCount+1;
 const updatedIngredients = {
...this.state.ingredients
 };
updatedIngredients[type] = updatedCount;
const priceAddition = INGREDIENT_PRICE[type];
const oldprice = this.state.totalPrice;
const newprice = oldprice+priceAddition;
this.setState({
    totalPrice:newprice,
    ingredients:updatedIngredients
});
this.updatePurchaseState(updatedIngredients)
}
removeIngredientHandler = (type) =>
 {
     const oldCount = this.state.ingredients[type];
if(oldCount <= 0) {
    return;
}
     const updatedCount =oldCount-1;
     const updatedIngredients = {
         ...this.state.ingredients
     };

     updatedIngredients[type] = updatedCount;
     const priceDeduction= INGREDIENT_PRICE[type];
     const oldprice = this.state.totalPrice;
    const  newprice = oldprice-priceDeduction;
    this.setState({
        totalPrice:newprice,
        ingredients:updatedIngredients

    })
    this.updatePurchaseState(updatedIngredients)

}

purchaseHandler =() => {
    this.setState({purchase:true});

}

purchaseCancleHandler = () => {
    this.setState({purchase:false});

}

purchaseContinuewHandler = () => {
    this.setState({loading:true })

    const order = {

ingredients: this.state.ingredients,
price:this.state.totalPrice,
customer:{
    name:'tanvir hasan',
    address:{
         street:'nikunja @2',
         zipcode:'34543',
         country:'bangladesh'
    },
    email:'tanvirhasan@gmail.com'
},
deliveryMethod:'fastest'
    }

    axios.post('/orders.json',order)
    .then(respone=>this.setState({ purchase:false,loading:false,}))
    .catch(err=>this.setState({purchase:false,loading:false}));

}

    render () {

        let orderSummary =null;
        let burger = <Spineer/>

if(this.state.ingredients)
{
    const disableInfo = {
        ...this.state.ingredients
    }
    for(let key in disableInfo)
    {
        disableInfo[key]=disableInfo[key]<=0
    }
    console.log(this.state.ingredients);
    burger =(
     <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded ={this.addIngredientHandler}
        removeIngredient={this.removeIngredientHandler}
        totalprice = {this.state.totalPrice}
        purchasable={this.state.purchasable}
        disabled = {disableInfo}
        orderd = {this.purchaseHandler}/>
   </Aux>
);
     orderSummary=<OrderSummary ingredients={this.state.ingredients}
        purchaseContinue ={this.purchaseContinuewHandler}
        purchaseCancle={this.purchaseCancleHandler}
        totalprice ={this.state.totalPrice}/>


 }

 if(this.state.loading){
    orderSummary =<Spineer/>;
};







        return (
            <Aux>
 <Modal show={this.state.purchase} modalClose={this.purchaseCancleHandler}>
 {orderSummary}
            </Modal>
{burger}
            </Aux>

        )

    }

}

export default WithErrorHandler(BurgerBuilder, axios);
