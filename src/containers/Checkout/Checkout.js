import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummery'

import ContactData from  './ContactData/ContactData'
class Checkout extends Component {

    state = {
        ingredients: {
            bacon:1,
            meat:1,
            salad:1,
            cheese:1
        }

    }

componentDidMount() {
const query= new URLSearchParams(this.props.location.search);
const ingredients ={}
for (let param of query.entries()){
//['salad','1']
ingredients[param[0]] = + param[1];
}
this.setState({ ingredients:ingredients})

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
  checkoutCancle ={this.checkoutCancleHandler}/>

  <Route path={this.props.match.path + '/contact-data'}
   render = { () => (<ContactData ingredients={this.state.ingredients} />)}
  />

              </div>
         )
    }

}

export default Checkout