import React, {
    Component
} from 'react';

import {connect} from 'react-redux';
import axios from '../../axios-orders'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/buildControls/buildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spineer from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

import * as burgerBuilderActions from '../../Store/actions/index';




class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        purchase: false,
        loading: false
    }

    componentDidMount() {
        console.log(this.props);
        // axios.get('https://react-myburger-miraz.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({
        //             ingredients: response.data
        //         })
        //         // this.setState({ingredients:res.data})
        //     })
        //     .catch(error => {})

    }


    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            })

            .reduce((sum, el) => {
                return sum + el;
            }, 0);
     
           return sum > 0
 
    }
    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICE[type];
    //     const oldprice = this.state.totalPrice;
    //     const newprice = oldprice + priceAddition;
    //     this.setState({
    //         totalPrice: newprice,
    //         ingredients: updatedIngredients
    //     });
    //     this.updatePurchaseState(updatedIngredients)
    // }
    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };

    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICE[type];
    //     const oldprice = this.state.totalPrice;
    //     const newprice = oldprice - priceDeduction;
    //     this.setState({
    //         totalPrice: newprice,
    //         ingredients: updatedIngredients

    //     })
    //     this.updatePurchaseState(updatedIngredients)

    // }

    purchaseHandler = () => {
        this.setState({
            purchase: true
        });

    }

    purchaseCancleHandler = () => {
        this.setState({
            purchase: false
        });

    }

    purchaseContinuewHandler = () => {
this.props.history.push('/checkout')

// const queryParams = [];
// for(let i in this.state.ingredients)
// {
//     queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]));
// }
// queryParams.push('price=' + this.props.price)

// const queryString = queryParams.join('&');


// this.props.history.push({
//     pathname:'checkout',
//     search:'?' + queryString

// })
    }

    render() {

        let orderSummary = null;
        let burger = < Spineer / >

            if (this.props.ing) {
                const disableInfo = {
                    ...this.props.ing
                }
                for (let key in disableInfo) {
                    disableInfo[key] = disableInfo[key] <= 0
                }
                console.log(this.props.ing);
                burger = ( <
                    Aux >
                    <
                    Burger ingredients = {
                        this.props.ing
                    }
                    /> <BuildControls ingredientAdded = {
                        this.props.onIngredientAdded
                    }
                    removeIngredient = {
                        this.props.onIngredientRemove
                    }
                    totalprice = {
                        this.props.price
                    }
                    purchasable = {
                        this.updatePurchaseState(this.props.ing)
                    }
                    disabled = {
                        disableInfo
                    }
                    orderd = {
                        this.purchaseHandler
                    }
                    /> <
                    /Aux>
                );
                orderSummary = < OrderSummary ingredients = {
                    this.props.ing
                }
                purchaseContinue = {
                    this.purchaseContinuewHandler
                }
                purchaseCancle = {
                    this.purchaseCancleHandler
                }
                totalprice = {
                    this.props.price
                }
                />


            }

        if (this.state.loading) {
            orderSummary = < Spineer / > ;
        };

        return ( <Aux >
            <Modal show = {
                this.state.purchase
            }
            modalClose = {
                this.purchaseCancleHandler
            }> {orderSummary} </Modal> {
                burger
            } </Aux>

        )

    }

}
 const mapStateToProps = state => {
     return {
    ing:state.ingredients,
    price:state.totalPrice
     };
 }

 const mapDispatchToProps = dispatch => {
      return {
 onIngredientAdded:(ingName) =>dispatch(burgerBuilderActions.addIngredient(ingName)),
onIngredientRemove:(ingName) =>dispatch(burgerBuilderActions.removeIngredient(ingName))
      }
 }

export default connect(mapStateToProps, mapDispatchToProps) (WithErrorHandler(BurgerBuilder, axios));