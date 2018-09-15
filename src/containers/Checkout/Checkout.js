import React, {Component} from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummery'
class Checkout extends Component {

    state = {
        ingredients: {
            bacon:1,
            meat:1,
            salad:1,
            cheese:1
        }

    }
    checkoutCancleHandler = () => {
 this.props.history.goBack('/');
    }

    CheckoutContinueHandler = () => {
         this.props.history.replace('/Checkout/contact-data')
    }
    render() {
         return(
              <div>
  <CheckoutSummary
  ingredients={this.state.ingredients}
  checkoutContinue={this.CheckoutContinueHandler}
  checkoutCancle ={this.checkoutCancleHandler}
  />
              </div>
         )
    }

}

export default Checkout